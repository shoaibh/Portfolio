"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const StarBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let mouseX = 0;
  let mouseY = 0;
  const windowHalfX = window?.innerWidth;
  const windowHalfY = window?.innerHeight;

  useEffect(() => {
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let stars: THREE.Points;
    let geometry: THREE.SphereGeometry;
    let starStuff: THREE.PointsMaterial;
    let materialOptions: THREE.PointsMaterialParameters;

    const init = () => {
      const container = containerRef.current;

      if (!container) return;

      const HEIGHT = window.innerHeight;
      const WIDTH = window.innerWidth;
      const aspectRatio = WIDTH / HEIGHT;
      const fieldOfView = 75;
      const nearPlane = 1;
      const farPlane = 1000;

      camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
      camera.position.z = farPlane / 2;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x000000, 0.0003);

      starForge();

      if (webGLSupport()) {
        renderer = new THREE.WebGLRenderer({ alpha: true });
      }

      renderer.setClearColor(0x000011, 1);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(WIDTH, HEIGHT);
      container.appendChild(renderer.domElement);

      window.addEventListener('resize', onWindowResize, false);
      document.addEventListener('mousemove', onMouseMove, false);
    };

    const animate = () => {
      requestAnimationFrame(animate);
      render();
    };

    const render = () => {
      if (!camera || !scene || !renderer) return;

      camera.position.x += (mouseX - camera.position.x) * 0.0001;
      camera.position.y += (-mouseY - camera.position.y) * 0.0001;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    const webGLSupport = () => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch (e) {
        return false;
      }
    };

    const onWindowResize = () => {
      if (!camera || !renderer) return;

      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;

      camera.aspect = WIDTH / HEIGHT;
      camera.updateProjectionMatrix();
      if (renderer) renderer.setSize(WIDTH, HEIGHT);
    };

    const starForge = () => {
      const starQty = 25000;
    
      const positions = new Float32Array(starQty * 3);
    
      for (let i = 0; i < starQty; i++) {
        positions[i * 3] = Math.random() * 4000 - 2000;
        positions[i * 3 + 1] = Math.random() * 4000 - 2000;
        positions[i * 3 + 2] = Math.random() * 4000 - 2000;
      }
    //@ts-ignore
      geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
      materialOptions = {
        size: 1.0,
        transparent: true,
        opacity: 0.7,
      };
    
      starStuff = new THREE.PointsMaterial(materialOptions);
    
      stars = new THREE.Points(geometry, starStuff);
      if (scene) scene.add(stars);
    };
    
    
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div ref={containerRef} style={{ overflow: 'hidden' }} className='top-0 fixed' />;
};

export default StarBackground;
