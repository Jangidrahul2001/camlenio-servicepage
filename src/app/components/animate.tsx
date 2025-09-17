"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function EarthAnimation() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambient);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load(
      "/earth.jpg",
      () => {
        console.log("✅ Earth texture loaded");
      },
      undefined,
      (err) => {
        console.error("❌ Error loading texture:", err);
      }
    );

    // Earth
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshStandardMaterial({ map: earthTexture });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Marker (India)
    const lat = 20;
    const lon = 78;
    const radius = 1.55;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const markerGeometry = new THREE.SphereGeometry(0.05, 32, 32);
    const markerMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const marker = new THREE.Mesh(markerGeometry, markerMaterial);
    marker.position.set(
      -(radius * Math.sin(phi) * Math.cos(theta)),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
    scene.add(marker);

    // GSAP timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#earth-section",
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
      },
    });

    // Only rotate to face India (no extra spin)
    tl.to(earth.rotation, {
      x: THREE.MathUtils.degToRad(25),
      y: THREE.MathUtils.degToRad(190),
      duration: 2,
      ease: "power1.inOut",
    });

    // Zoom steps
    tl.to(camera.position, { z: 3, duration: 1.2, ease: "power2.inOut" });
    tl.to(camera.position, { z: 1.8, duration: 1.2, ease: "power2.inOut" });

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section id="earth-section" className="h-screen w-full bg-black">
      <div ref={mountRef} className="h-screen w-full" />
    </section>
  );
}
