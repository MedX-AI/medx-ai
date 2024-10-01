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

function Capsule_top() {
  const { scene } = useGLTF('/capsule_top.glb');

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.1,
        transmission: 0.9,
        opacity: 0.9,
        transparent: true,
        ior: 1.5,
        reflectivity: 0.5,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
      });
    }
  });

  return <primitive object={scene} scale={[2, 2, 2]} position={[0, -10, -20]} />;
}
function Capsule_remaining() {
  const { scene } = useGLTF('/capsule_remaining.glb');
  return <primitive object={scene} scale={[2,2,2]} position={[0,-10,-20]} />;
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
  const refScrollContainer = useRef(null);

  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      const scroll = new Locomotive({
        el: refScrollContainer.current,
        smooth: true,
      });
    }

    getLocomotive();
  }, []);

  return (
    <div>
        <div id="scroll-container" ref={refScrollContainer} data-scroll-container style={{ height: '200vh' }}>
          <Canvas className="sticky" gl={{ clearColor: 'pink' }}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Camera />
            {/* <OrbitControls /> */}
            <DNA />
            <Stars />
            <Capsule_top />
            <Capsule_remaining/>
          </Canvas>
        </div>
        <div style={{height: '100vh'}}></div>
    </div>
  );
}