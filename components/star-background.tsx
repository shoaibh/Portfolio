"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const starsRef = useRef<THREE.Points | null>(null);
  const geometryRef = useRef<THREE.BufferGeometry | null>(null);
  const starStuffRef = useRef<THREE.PointsMaterial | null>(null);

  useEffect(() => {
    let animationFrameId: number;

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      const aspectRatio = WIDTH / HEIGHT;
      const fieldOfView = 75;
      const nearPlane = 1;
      const farPlane = 1000;

      const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
      camera.position.z = farPlane / 2;
      cameraRef.current = camera;

      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.0003);
      sceneRef.current = scene;

      starForge();

      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setClearColor(0x000011, 1);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(WIDTH, HEIGHT);
      rendererRef.current = renderer;

      container.appendChild(renderer.domElement);

      window.addEventListener('resize', onWindowResize);
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      const camera = cameraRef.current;
      const scene = sceneRef.current;
      const renderer = rendererRef.current;
      if (!camera || !scene || !renderer) return;

      camera.position.x += 0.03;
      camera.position.y -= 0.05;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    const onWindowResize = () => {
      const camera = cameraRef.current;
      const renderer = rendererRef.current;
      if (!camera || !renderer) return;

      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;

      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
      renderer.setSize(WIDTH, HEIGHT);
    };

    const starForge = () => {
      const starQty = 25000;
      const positions = new Float32Array(starQty * 3);

      for (let i = 0; i < starQty; i++) {
        positions[i * 3] = Math.random() * 4000 - 2000;
        positions[i * 3 + 1] = Math.random() * 4000 - 2000;
        positions[i * 3 + 2] = Math.random() * 4000 - 2000;
      }

      geometryRef.current = new THREE.BufferGeometry();
      geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const materialOptions: THREE.PointsMaterialParameters = {
        size: 1.0,
        transparent: true,
        opacity: 0.7,
      };

      starStuffRef.current = new THREE.PointsMaterial(materialOptions);

      const stars = new THREE.Points(geometryRef.current, starStuffRef.current);
      starsRef.current = stars;
      if (sceneRef.current) sceneRef.current.add(stars);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onWindowResize);
      const container = containerRef.current;
      if (container && rendererRef.current) {
        container.removeChild(rendererRef.current.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ overflow: 'hidden' }} className='top-0 fixed' />;
};

export default StarBackground;
