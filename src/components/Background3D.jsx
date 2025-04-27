import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Background3D() {
  return (
    <Canvas className="background-canvas">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* Example 3D Object */}
      <mesh rotation={[90, 0, 20]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Background3D;
