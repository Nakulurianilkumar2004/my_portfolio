import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="navy" />
    </mesh>
  );
}

function Background3D() {
  return (
    <div style={{ height: '300px', width: '100%', background: 'black', overflow: 'hidden' }}>
      <Canvas camera={{ position: [2, 2, 2] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

export default Background3D;


