"use client";

import {
  DragControls,
  Html,
  OrbitControls,
  PerspectiveCamera,
  useProgress,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import MacbookModel from "./macbook-model";

function MacbookLoader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Macbook() {
  const [rotationSpeed, setRotationSpeed] = useState(0);
  const [OrbitControlEnabled, setOrbitControlEnabled] = useState(true);

  const modelRef = useRef();

  useEffect(() => {
    const onScroll = () => {
      setRotationSpeed(window.scrollY * 0.01);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="relative"
      style={{ height: "22rem" }}
    >
      <directionalLight intensity={4} position={[2, 5, 2]}></directionalLight>
      <ambientLight intensity={2}></ambientLight>

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={[1, 1, 3]}
      ></PerspectiveCamera>

      <Suspense fallback={<MacbookLoader></MacbookLoader>}>
        <DragControls
          onDragStart={() => setOrbitControlEnabled(false)}
          onDragEnd={() => setOrbitControlEnabled(true)}
        >
          <MacbookModel
            modelRef={modelRef}
            rotationSpeed={rotationSpeed}
          ></MacbookModel>
        </DragControls>
      </Suspense>
      <OrbitControls
        enabled={OrbitControlEnabled}
        enableZoom={false}
        minDistance={2}
        maxDistance={5}
        rotateSpeed={0.5}
        zoomSpeed={0.5}
      ></OrbitControls>
    </Canvas>
  );
}
