import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {
  Color,
  Group,
  MeshStandardMaterial,
  Texture,
  TextureLoader,
} from "three";

useGLTF.preload("/macbook_air_13_inch.glb");

export default function MacbookModel({
  modelRef,
  rotationSpeed,
}: {
  modelRef: MutableRefObject<undefined>;
  rotationSpeed: number;
}) {
  const [screenTexture, setScreenTexture] = useState<Texture>();

  const group = useRef<Group>(null);
  const gltf = useGLTF("/macbook_air_13_inch.glb");

  useEffect(() => {
    const loader = new TextureLoader();
    const loadAsync = async () => {
      const texture = await loader.loadAsync("/coding.png");
      setScreenTexture(texture);
    };
    loadAsync();
  }, []);

  useEffect(() => {
    console.log("Texture loaded");
    if (!screenTexture) {
      return;
    }

    gltf.scene.traverse((node: any) => {
      if (node.isMesh && node.name === "Plane009_screem_0") {
        node.material = new MeshStandardMaterial({
          map: screenTexture,
          color: new Color(0xaaaaaa),
        });
        node.material.map.repeat.set(1, 1);
        node.material.map.offset.set(0.01, -0.02);

        return;
      }
    });
  }, [screenTexture]);

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
        scale={0.015}
        position={[-0.65, -1.7, -3]}
      ></primitive>
    </group>
  );
}
