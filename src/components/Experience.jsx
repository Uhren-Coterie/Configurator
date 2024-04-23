import React, { Suspense } from 'react';
import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  Html
} from "@react-three/drei";
import Hexa from "./Hexa";
import { useThree, useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

const Experience = () => {
  const { camera } = useThree();

  camera.fov = 75; // Adjust the field of view
  camera.updateProjectionMatrix();

  useFrame(() => {
    camera.lookAt(new Vector3(0.09, -0.03, -0.02)); // Adjust the lookAt position
  });

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
    '@media (max-width: 768px)': { // Tablet and below
      fontSize: '18px',
    },
    '@media (max-width: 480px)': { // Mobile and below
      fontSize: '14px',
    }
  };

  return (
    <Suspense fallback={
      <Html>
        <div style={style}>
          Loading Accessory...
        </div>
      </Html>
    }>
      <PresentationControls
        speed={1.5}
        global
        polar={[-0.1, Math.PI / 4]}
        rotation={[Math.PI / 8, Math.PI / 4, 0]}
      >
        <Stage background="#ffffff" intensity={0.001} shadows={false}>
          <Hexa />
        </Stage>
      </PresentationControls>
    </Suspense>
  );
};

export default Experience;