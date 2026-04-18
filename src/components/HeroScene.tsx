"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh, Points } from "three";

function Orb() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    const m = ref.current;
    if (!m) return;
    const { x, y } = state.pointer;
    m.rotation.y += 0.003;
    m.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    m.position.x += (x * 0.3 - m.position.x) * 0.04;
    m.position.y += (y * 0.2 - m.position.y) * 0.04;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={ref} castShadow receiveShadow>
        <icosahedronGeometry args={[1.4, 8]} />
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.45}
          speed={1.4}
          roughness={0.2}
          metalness={0.8}
          emissive="#1e1b4b"
          emissiveIntensity={0.6}
        />
      </mesh>
      <mesh scale={1.7}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial wireframe color="#818cf8" transparent opacity={0.08} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const ref = useRef<Points>(null);
  const count = 180;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4 + Math.random() * 3;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        sizeAttenuation
        color="#a5b4fc"
        transparent
        opacity={0.8}
      />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={1.2} />
      <pointLight position={[-3, -2, -2]} intensity={0.8} color="#ec4899" />
      <Orb />
      <Particles />
    </Canvas>
  );
}
