import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { Group } from "three";

useGLTF.preload("/macbook_air_13_inch.glb");

export default function LaptopModel() {
  const group = useRef<Group>(null);
  const gltf = useGLTF("/macbook_air_13_inch.glb");

  return (
    <group ref={group}>
      <primitive object={gltf.scene} scale={0.01}></primitive>
    </group>
  );
}
