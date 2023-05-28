import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";
import { Box } from "@chakra-ui/react";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./computer_and_laptop/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

/// export default Computers;

const ThreeText = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    // <Box height={"80vh"} width="80%">
    //   <Canvas
    //     frameloop="demand"
    //     shadows
    //     dpr={[1, 2]}
    //     camera={{ position: [20, 3, 5], fov: 25 }}
    //     gl={{ preserveDrawingBuffer: true }}
    //   >
    //     <Suspense fallback={<CanvasLoader />}>
    //       <OrbitControls
    //         enableZoom={true}
    //         //maxPolarAngle={Math.PI / 2}
    //         // minPolarAngle={Math.PI / 2}
    //       />
    //       <Computers isMobile={isMobile} />
    //     </Suspense>

    //     <Preload all />
    //   </Canvas>
    // </Box>

    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 1, 5]}
      camera={{ position: [0, 90, 90], fov: 30 }} // Adjust the position value to control zoom level
      gl={{ preserveDrawingBuffer: true }}
      onCreated={({ gl }) => {
        // Adjust pixel ratio for high-density screens
        gl.setPixelRatio(window.devicePixelRatio);
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          //  maxPolarAngle={Math.PI / 4}
          // minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={2} /> {/* Add ambient light */}
        <directionalLight
          position={[0, 110, 590]}
          intensity={0.8}
          castShadow
        />{" "}
        {/* Add directional light */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ThreeText;
