import { OrbitControls, Plane, Sky } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

import { Suspense } from "react";

import Island from "@/geometries/land/Island";

import Ocean from "@/geometries/water/ocean/Ocean";

export default function Builder() {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight intensity={0.5} position={[7, 5, 1]} />

      <Sky
        distance={450000}
        sunPosition={[5, 1, 8]}
        inclination={0}
        azimuth={0.25}
      />
      <Ocean />
      <Suspense>
        <Island />
      </Suspense>
    </>
  );
}
