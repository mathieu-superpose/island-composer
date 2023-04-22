import { useMemo, useRef } from "react";
import { Color } from "three";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";

export default function Ocean() {
  const planeRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      u_time: {
        value: 0.0,
      },
      u_colorA: { value: new Color(0x0000ff) },
      u_colorB: { value: new Color(0xff0000) },
    }),
    []
  );

  useFrame((state) => {
    if (!planeRef.current) return;

    const { clock } = state;
    planeRef.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <>
      <mesh
        ref={planeRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        scale={4}
      >
        <planeGeometry args={[50, 50, 30, 30]} />
        <shaderMaterial
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </mesh>
    </>
  );
}
