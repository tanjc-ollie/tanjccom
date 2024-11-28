import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MutableRefObject, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/macbook_air_13_inch.glb");

export default function LaptopModel({
  modelRef,
  rotationSpeed,
}: {
  modelRef: MutableRefObject<undefined>;
  rotationSpeed: number;
}) {
  const group = useRef<Group>(null);
  const gltf = useGLTF("/macbook_air_13_inch.glb");

  useFrame(() => {
    if (modelRef.current) {
      //@ts-ignore
      modelRef.current.rotation.y = rotationSpeed;
    }
  });

  return (
    <group ref={group}>
      <primitive
        ref={modelRef}
        object={gltf.scene}
        scale={0.012}
        position={[-0.5, -1.2, -2]}
      ></primitive>
    </group>
  );
}
