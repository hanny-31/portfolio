import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

function Particles(props: any) {
  const ref = useRef<any>(null);
  
  // Generate particles
  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particles} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ff00ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function Grid() {
    return (
        <gridHelper args={[20, 20, 0x00ffff, 0x220022]} position={[0, -2, 0]} rotation={[0, 0, 0]} />
    )
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <Particles />
            <Grid />
        </>
    )
}

export default function ParticleWave() {
  return (
    <div className="absolute inset-0 -z-10 bg-background">
      <ErrorBoundary fallback={<div className="w-full h-full bg-background" />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }} gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={null}>
                <Scene />
            </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
