import React, { useEffect } from 'react'
import { useTexture, useProgress } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { useCustomization } from "../contexts/Customization";
import { useLoader } from '@react-three/fiber'

const Hexa = ({ onModelLoad, ...props }) => {
  const { active, progress, total } = useProgress();
  const gltf = useLoader(GLTFLoader, './models/Hexa.glb');
  const nodes = gltf.nodes;

  useEffect(() => {
    if (active && onModelLoad) {
      onModelLoad(progress / total);
    }
  }, [active, progress, total, onModelLoad]);

  const { innerMaterial, OuterMaterial } = useCustomization();

  // Define inner textures
  const innerTextures = Array.from({ length: 12 }, (_, i) => {
    const texture = useTexture({
      map: `./textures/Inner Texture/${i + 1}/inner${i + 1}.bmp`,
    });
    texture.map.repeat.set(40, 20);
    texture.map.wrapS = texture.map.wrapT = THREE.MirroredRepeatWrapping;
    return texture;
  });

  // Define Outer textures
  const OuterTextures = Array.from({ length: 19 }, (_, i) => {
    const texture = useTexture({
      map: `./textures/Outer Texture/${i + 1}/Outer${i + 1}.bmp`,
    });
    texture.map.repeat.set(40, 20);
    texture.map.wrapS = texture.map.wrapT = THREE.MirroredRepeatWrapping;
    return texture;
  });

  // Extract the index from the material name (e.g., "inner1" -> 1)
  const innerIndex = parseInt(innerMaterial.replace('inner', '')) - 1;
  const OuterIndex = parseInt(OuterMaterial.replace('Outer', '')) - 1;

  return (
    <group {...props} dispose={null} >
      <mesh geometry={nodes.InnerShell.geometry}>
        <meshStandardMaterial map={innerTextures[innerIndex].map} side={THREE.DoubleSide} />
      </mesh>
      <mesh geometry={nodes.OuterShell.geometry}>
        <meshStandardMaterial map={OuterTextures[OuterIndex].map} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

export default Hexa;