"use client"
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import gsap from 'gsap';

function DNA() {
  const { scene } = useGLTF('/DNA.glb');
  return <primitive object={scene} position={[30, -30, -30]} rotation={[Math.PI / 4, 0, 0]} />;
}

function Camera() {
  const cameraRef = useRef();

  useEffect(() => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 0,
        z: 10,
        scrollTrigger: {
          trigger: '#scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        //   markers: true,
        },
      });
    });
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[-70, 10, 0]} />;
}

export default function App() {
  return (
    <div id="scroll-container" style={{ height: '200vh' }}>
      <Canvas gl={{ clearColor: 'pink' }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Camera />
        <DNA />
      </Canvas>
    </div>
  );
}