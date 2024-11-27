"use client";

import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MacbookModel from "./macbook-model";

function MacbookLoader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export default function Macbook() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-full">
      <ambientLight intensity={2}></ambientLight>
      <Suspense fallback={<MacbookLoader></MacbookLoader>}>
        <MacbookModel></MacbookModel>
      </Suspense>
      <OrbitControls></OrbitControls>
    </Canvas>
  );
}
