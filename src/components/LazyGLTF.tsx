import React from 'react';
import { useGLTF } from '@react-three/drei';
export default function LazyGLTF({ url }:{url:string}){ const { scene } = useGLTF(url, true, true); return <primitive object={scene} /> }
