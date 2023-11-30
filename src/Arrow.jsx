import { useTexture } from "@react-three/drei";
import AnimatedCamera from "./AnimatedCamera";
import {CameraTimeline} from "./AnimatedCamera";

function Arrow(props) {
  const { rotation, position, stageName, arrowUrl, scale, opacity } = props;
  const arrowTex = useTexture(arrowUrl);
  

  
  return (
    <mesh
      rotation={rotation ? rotation : [0, 0, 0]}
      position={position ? position : [0, 0, 0]}
      scale={scale ? scale : [0, 0, 0]}
    >
      <planeGeometry />

      <meshBasicMaterial
        transparent
        map={arrowTex}
        opacity={opacity ? opacity : 1}
      />
    </mesh>
    
    
  );
}

export default Arrow;
