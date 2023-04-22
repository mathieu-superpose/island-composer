import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Land: THREE.Mesh;
    Grass: THREE.Mesh;
  };
  materials: {};
};

const MODEL = "/3d/land/island.glb";

const sandMaterial = new THREE.MeshStandardMaterial({
  color: "beach",
});

const grassMaterial = new THREE.MeshStandardMaterial({
  color: "green",
});

export default function Island(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(MODEL) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Land.geometry} material={sandMaterial} />
      <mesh geometry={nodes.Grass.geometry} material={grassMaterial} />
    </group>
  );
}

useGLTF.preload(MODEL);
