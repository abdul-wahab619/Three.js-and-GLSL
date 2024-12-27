import { useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";

const Cube = ({ position, size, color }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const speed = hovered ? 0.5 : 0.1;
    ref.current.rotation.x += delta * speed;
    // ref.current.rotation.y += delta;
    // ref.current.rotation.z += delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={hovered ? "red" : "orange"}
        wireframe={true}
      />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    const speed = hovered ? 1 : 0.2;
    ref.current.rotation.x += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial
        color={hovered ? "orange" : "red"}
        wireframe={true}
      />
    </mesh>
  );
};

const Torus = ({ position, size, color }) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * 0.4;
    // ref.current.rotation.z += delta;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <torusGeometry args={size} />
      <meshStandardMaterial
        color={hovered ? "red" : "orange"}
        wireframe={true}
      />
    </mesh>
  );
};

function App() {
  return (
    <>
      <Canvas>
        <directionalLight position={[0, 0, 10]} />
        <ambientLight />
        <Cube position={[-2, 0, 0]} size={[1, 1, 1]} color="blue" />
        <Sphere position={[0, 0, 0]} size={[0.75, 32, 32]} color="red" />
        <Torus position={[2, 0, 0]} size={[0.5, 0.2, 16, 100]} color="green" />
      </Canvas>
    </>
  );
}

export default App;
