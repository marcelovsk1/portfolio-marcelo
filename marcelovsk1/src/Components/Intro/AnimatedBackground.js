// src/components/AnimatedBackground.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.SphereGeometry(2, 32, 32);
        const material = new THREE.MeshBasicMaterial({
            color: new THREE.Color("#d3d3d3"), 
            wireframe: true,
            transparent: true,
            opacity: 10, 
        });
        
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            sphere.rotation.x += 0.005;
            sphere.rotation.y += 0.005;
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            renderer.dispose();
            mountRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} className="intro-canvas"></div>;
};

export default AnimatedBackground;
