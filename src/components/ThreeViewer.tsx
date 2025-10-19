import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls, Html } from '@react-three/drei';
import LazyGLTF from './LazyGLTF';

function Wobble({ children, speed = 1, amplitude = 0.02 }:{children:React.ReactNode; speed?:number; amplitude?:number}){
  const ref = useRef<any>(null);
  useFrame((state)=>{ const t = state.clock.getElapsedTime()*speed; if(ref.current){ ref.current.rotation.y += Math.sin(t)*amplitude*0.05; ref.current.position.y = Math.sin(t*0.8)*amplitude; } });
  return <group ref={ref}>{children}</group>;
}

export function ThreeViewer({ url, rotation=[0,0,0], zoom=1 }:{url?:string; rotation?:[number,number,number]; zoom?:number}){
  return (
    <Canvas camera={{ position: [0,0,3/zoom], fov:45 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3,5,2]} intensity={1.2} />
      <Wobble speed={1} amplitude={0.03}>
        <group rotation={rotation as any}>
          <Suspense fallback={<Html center><div className="px-4 py-2 rounded-xl bg-black/70 text-white text-sm">Cargando modelo…</div></Html>}>
            {url ? <LazyGLTF url={url} /> : <mesh><boxGeometry args={[1,1,1]} /><meshStandardMaterial /></mesh>}
          </Suspense>
        </group>
      </Wobble>
      <Environment preset="studio" />
      <ContactShadows position={[0,-1.1,0]} opacity={0.35} blur={2} far={5} />
      <OrbitControls enablePan={false} minDistance={1.5} maxDistance={4} />
    </Canvas>
  );
}
