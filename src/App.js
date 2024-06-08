import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, SpotLight, Stars } from '@react-three/drei';
import Plane from './components/Plane';
import Wall from './components/Wall';
import Frame from './components/Frame';
import Laptop from "./components/Laptop";

function App() {
  const [roomLight, setRoomLight] = useState(false);
  function roomLightButton() {
    roomLight ? setRoomLight(false) : setRoomLight(true);
  }
  return (
    <Canvas>
      <OrbitControls />
      <Stars />
      {/* Outer lamp */}
      <Frame position={[-49, 13, -49]} args={[1, 24, 1]} color='white'></Frame>
      <spotLight
        color={"#faf3d4"}
        position={[-49, 14, -49]}
        angle={180}
        penumbra={1}
        intensity={2000}
        castShadow
        shadow-mapSize={1024}
      />
      {/* Outer area ends here */}
      {/* Room lights */}
      {/* <ambientLight intensity={0.5} /> */}
      <spotLight
        color={"#faf3d4"}
        position={[-20, 29.7, 19]}
        angle={180}
        penumbra={1}
        intensity={roomLight ? 1000 : 0}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <directionalLight castShadow position={[2.5, 1, 2]} shadow-mapSize={[1024, 1024]}>
   <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
 </directionalLight> */}
      {/* <Plane></Plane> */}
      {/* args degine the length width and height, x axis is x is for creating length of surface , y is for giving height to it, z is width of the surface */}
      {/* created a plane surface area so we can create our own room on top it */}
      <Plane position={[0, 0, 0]} args={[100, 2, 100]} />
      {/* create surface of the room/ carpet */}
      <Wall position={[0, 1, 0]} args={[50, 3, 50]} color='#AE8C7E' />
      <Wall position={[10, 2.5, 10]} args={[20, 0.2, 20]} color='white' />
      {/* create walls here // walls*/}
      <Wall position={[-25, 15, 0]} args={[1, 30, 50]} color='#ebe2e1' />
      <Wall position={[-0.5, 15, -25]} args={[50, 30, 1]} color='#ebe2e1' />
      {/* create window in the wall */}
      {/* <Window position={[5, 20 , -25]} args={[10, 10, 1]} color='white'></Window> */}
      {/* position is from the wall, args are the size */}
      <Frame position={[-24.5, 15, 23]} args={[0.5, 2, 2]} color='grey' roomLight={true} updateStateFunction={roomLightButton}></Frame>
      <spotLight
        color={"#faf3d4"}
        position={[-24.1, 15.5, 24]}
        angle={360}
        penumbra={1}
        intensity={20}
        castShadow
        shadow-mapSize={1024}
      />
      <Frame position={[-24, 15, 23]} args={[0.5, 0.5, 0.5]} color='black' roomLight={true} updateStateFunction={roomLightButton}></Frame>
      {/* Table */}
      <Frame position={[-9.5, 12, -18]} args={[30, 1, 13]} color='#AE8C7E'></Frame>
      <Frame position={[2, 6, -14]} args={[1, 12, 1]} color='black'></Frame>
      <Frame position={[-20, 6, -14]} args={[1, 12, 1]} color='black'></Frame>

      {/* Laptop screen */}
      <group position={[10, 12, 0]}>
          <Laptop />
        </group>
    </Canvas>
  );
}

export default App;