"use client"
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';

function DNA() {
  const { scene } = useGLTF('/DNA.glb');
  return <primitive object={scene} position={[30,-30,-30]} rotation={[Math.PI/4,0,0]}/>;
}

function Camera() {
  const cameraRef = useRef();

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[-70, 10, 0]} />;
}

export default function App() {
  return (
    <Canvas gl={{ clearColor: 'pink' }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Camera />
      <OrbitControls />
      <DNA />
    </Canvas>
  );
}