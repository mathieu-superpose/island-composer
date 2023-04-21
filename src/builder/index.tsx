import { OrbitControls, Plane, Sky } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

function Sea() {
  return (
    <Plane
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3, 0]}
      args={[32, 32, 64, 64]}
    >
      <meshStandardMaterial color="blue" wireframe={false} />
    </Plane>
  );
}

export default function Builder() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} position={[7, 5, 1]} />

      <fog attach="fog" args={["white", 0, 26]} />
      <Sky sunPosition={[7, 5, 1]} />
      <Sea />
    </>
  );
}
