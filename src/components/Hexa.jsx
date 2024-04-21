import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useCustomization } from "../contexts/Customization";

const Hexa = (props) => {
  const { nodes } = useGLTF('./models/Hexa.glb')
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
    <group {...props} dispose={null}>
      <mesh geometry={nodes.InnerShell.geometry}>
        <meshStandardMaterial map={innerTextures[innerIndex].map} side={THREE.DoubleSide} />
      </mesh>
      <mesh geometry={nodes.OuterShell.geometry}>
        <meshStandardMaterial map={OuterTextures[OuterIndex].map} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

useGLTF.preload('./models/Hexa.glb')

export default Hexa;