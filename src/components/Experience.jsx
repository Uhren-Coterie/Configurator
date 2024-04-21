import {
    MeshReflectorMaterial,
    PresentationControls,
    Stage,
  } from "@react-three/drei";
  import Hexa from "./Hexa";
  
  const Experience = () => {
    return (
      <>
        <PresentationControls
          speed={1.5}
          global
          polar={[-0.1, Math.PI / 4]}
          rotation={[Math.PI / 8, Math.PI / 4, 0]}
        >
          <Stage background="#ffffff" intensity={0.6} shadows={false}>
            <Hexa />
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-2}>
          </mesh>
        </PresentationControls>
      </>
    );
  };
  
  export default Experience;