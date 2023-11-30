import { Suspense, useEffect, useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";

import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function GlacierEnvironment() {
  const { scene, materials, scale, position } = useGLTF(
    "https://cdn.glitch.me/31c8ec08-cb48-4cfa-8006-9382952e2452/Environment_V4.glb?v=1700338685514"
  );
  
  const modelRef = useRef();
  
    return (
    
    <primitive
      ref={modelRef}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
      object={scene}
    />
  );
}


export default GlacierEnvironment;

