import Head from "next/head";
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
        <h1>Island composer builder</h1>
      </main>
    </>
  );
}
