"use client"
import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

function DNA() {
  const { scene } = useGLTF('/DNA.glb');
  return <primitive object={scene} position={[0, -20, -30]} rotation={[Math.PI / 4, 0, 0]} />;
}

function Camera() {
  const cameraRef = useRef();

  useEffect(() => {
    import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.to(cameraRef.current.position, {
        x: 0,
        y: 0,
        z: 20,

        scrollTrigger: {
          trigger: '#scroll-container',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    });
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 0, 0);
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[-100, -10, 0]} />;
}

function addStar(scene) {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({ 
    color: THREE.MathUtils.randInt(0x000000, 0xffffff),
    emissive: THREE.MathUtils.randInt(0x000000, 0xffffff)
  });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

function Stars() {
  const { scene } = useThree();

  useEffect(() => {
    Array(200).fill().forEach(() => addStar(scene));
  }, [scene]);

  return null;
}

export default function App() {
  return (
    <div id="scroll-container" style={{ height: '200vh' }}>
      <Canvas gl={{ clearColor: 'pink' }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Camera />
        {/* <OrbitControls /> */}
        <DNA />
        <Stars />
      </Canvas>
    </div>
  );
}