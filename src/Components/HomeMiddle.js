import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Home= () => {
    const canvasRef = useRef();

    useEffect(() => {
      let scene, camera, renderer;
  
      const init = () => {
        
        scene = new THREE.Scene();
  
        camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        );
        camera.position.z = 5;
  
        renderer = new THREE.WebGLRenderer({ antialias: true });
        // renderer.setSize(window.innerWidth, window.innerHeight);
        
        // renderer.setSize(window.innerWidth, window.innerHeight);
        const handleResize = () => {
          // Get the width and height of the container
          const width = canvasRef.current.clientWidth;
          const height = canvasRef.current.clientHeight;
    
          // Update the renderer size and aspect ratio
          renderer.setSize(width, height);
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        };
    
        // Call the handleResize function initially
        handleResize();
    
        canvasRef.current.appendChild(renderer.domElement);

        const galaxyGeometry = new THREE.BufferGeometry();
  
        const positions = [];
        for (let i = 0; i < 10000; i++) {
          positions.push(
            THREE.MathUtils.randFloatSpread(1000),
            THREE.MathUtils.randFloatSpread(1000),
            THREE.MathUtils.randFloatSpread(1000)
          );
        }
        galaxyGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(positions, 3)
        );
  
        const galaxyMaterial = new THREE.PointsMaterial({
          size: 0.5,
          color: 0xffffff,
        });
  
        const galaxy = new THREE.Points(galaxyGeometry, galaxyMaterial);
        scene.add(galaxy);
  
        const animate = () => {
          requestAnimationFrame(animate);
          galaxy.rotation.y += 0.005;
          galaxy.rotation.x+=0.005;
          
          
          renderer.render(scene, camera);
        };
  
        animate();
      };
  
      const handleResize = () => {
        // Adjust the canvas size when the window is resized
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      init();
  
      return () => {
        // Cleanup on unmount
        window.removeEventListener('resize', handleResize);
        canvasRef.current.removeChild(renderer.domElement);
      };
    }, []);
  
    return <div className='canvas' ref={canvasRef} style={{height:'100vh' }} />;
};


export default Home;
