import Head from "next/head";

import { Canvas } from "@react-three/fiber";

import Builder from "@/builder";

import styles from "./Build.module.css";

export default function Build() {
  return (
    <>
      <Head>
        <title>Island Composer</title>
        <meta name="description" content="Build your own metaverse island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Canvas
          camera={{
            position: [50, 70, -50],
            fov: 45,
            near: 0.1,
            far: 1000,
          }}
        >
          <Builder />
        </Canvas>
      </main>
    </>
  );
}
