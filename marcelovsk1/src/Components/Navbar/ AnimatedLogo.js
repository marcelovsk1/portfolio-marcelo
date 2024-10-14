// // src/components/AnimatedLogo.js
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// const AnimatedLogo = () => {
//     const mountRef = useRef(null);

//     useEffect(() => {
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000); // Ajusta para 1:1 para ícone pequeno
//         camera.position.z = 3;

//         const renderer = new THREE.WebGLRenderer({ alpha: true });
//         renderer.setSize(50, 50); // Tamanho menor para a logo na navbar
//         mountRef.current.appendChild(renderer.domElement);

//         const geometry = new THREE.SphereGeometry(1, 32, 32); // Tamanho menor para a logo
//         const material = new THREE.MeshBasicMaterial({
//             color: new THREE.Color("#d3d3d3"),
//             wireframe: true,
//             transparent: true,
//             opacity: 0.5,
//         });
        
//         const sphere = new THREE.Mesh(geometry, material);
//         scene.add(sphere);

//         const animate = () => {
//             requestAnimationFrame(animate);
//             sphere.rotation.x += 0.005;
//             sphere.rotation.y += 0.005;
//             renderer.render(scene, camera);
//         };
//         animate();

//         return () => {
//             renderer.dispose();
//             mountRef.current.removeChild(renderer.domElement);
//         };
//     }, []);

//     return <div ref={mountRef} style={{ width: '50px', height: '50px' }} />;
// };

// export default AnimatedLogo;
