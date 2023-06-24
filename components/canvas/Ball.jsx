import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import { useBreakpointValue } from "@chakra-ui/react";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl.src]);
  const scale = useBreakpointValue({ base: 2.5, md: 2 });

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight position={[0.03, 0.02, 0.025]} />
      <mesh castShadow receiveShadow scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
