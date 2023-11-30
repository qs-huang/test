import { Suspense, useEffect, useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";

import AnimatedCamera from "./AnimatedCamera";
import { CameraTimeline } from "./AnimatedCamera";

import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function MainSalmon() {
  const { scene, materials, scale, position } = useGLTF(
    "https://cdn.glitch.global/1a94728f-4d0d-47aa-b71f-499fcf862414/mainSalmon2.glb?v=1700096099884"
  );

  const modelRef = useRef();

  useEffect(() => {
    
    console.log(materials);
    // Fish material - maybe can be named something fish related?
    console.log(useGLTF);
    
    materials["defaultMat"].transparent = true;
    materials["defaultMat"].opacity = 1;
    

        CameraTimeline.to(
      modelRef.current.rotation,
      {
        x: 0,
        y: -Math.PI,
        z: 0,
      },
      "stage 1"
    );
    
    //     CameraTimeline.to(
    //   modelRef.current.position,
    //   {
    //     x: 2.5,
    //     y: -0.75,
    //     z: -5,
    //   },
    //   "stage 1"
    // );
    
    CameraTimeline.to(
      modelRef.current.rotation,
      {
        x : 0, 
        y : -Math.PI - Math.PI/6,
        z : 0
      },
      "stage 2"
    );

    CameraTimeline.to(
      modelRef.current.position,
      {
        x: 4,
        y: -0.75,
        z: -30,
      },
      "stage 2"
    );
    
     CameraTimeline.to(
      modelRef.current.position,
      {
        x: 27,
        y: -0.75,
        z: -60,
      },
      "stage 2.5"
    );
    
    CameraTimeline.to(
    modelRef.current.rotation,
    {
      y : -Math.PI - Math.PI/4,
    },
      "stage 2.5"
    );
    
       CameraTimeline.to(
      materials["defaultMat"],
      {
        opacity: 0
      },
      "stage 2.5"
      
    );
    
    
    CameraTimeline.to(
      modelRef.current.position,
      {
        x: 20,
        y: -0.75,
        z: -50,
      },
      "stage 2.75"
    );
    
    
        CameraTimeline.to(
    modelRef.current.rotation,
    {
      y : -Math.PI + Math.PI * 5/6,
    },
      "stage 2.75"
    );
    
    
    
      CameraTimeline.to(
      modelRef.current.position,
      {
        x: 13,
        y: -0.75,
        z: -41,
      },
      "stage 3"
    );
    
    
    CameraTimeline.to(
    modelRef.current.rotation,
    {
      y : -Math.PI + Math.PI*2/3,
    },
      "stage 3"
    );
    
    
      CameraTimeline.to(
      materials["defaultMat"],
      {
        opacity: 1
      },
      "stage 3"
      
    );

    
  
    //This is new
        CameraTimeline.to(
      modelRef.current.position,
      {
        x: -15,
        y: -0.75,
        z: -13,
      },
      "stage 3.25"
    );
    
    
         CameraTimeline.to(
    modelRef.current.rotation,
    {
      y : -Math.PI + Math.PI*2/3,
    },
      "stage 3.25"
    );
    


    
    
            CameraTimeline.to(
      modelRef.current.position,
      {
        x: -32,
        y: -0.75,
        z: -20,
      },
      "stage 4"
    );
        
         CameraTimeline.to(
    modelRef.current.rotation,
    {
      y : -Math.PI + Math.PI/4,
    },
      "stage 4"
    );
    
    console.log("SHIT");


  }, [modelRef, materials]);

  return (
    
    <primitive
      ref={modelRef}
      rotation={[0, -Math.PI, 0]}
      scale={[1, 1, 1]}
      position={[2.5, -0.75, -5]}
      object={scene}
    />
  );
}

export default MainSalmon;
