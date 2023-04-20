import Head from "next/head";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Island Composer</title>
        <meta name="description" content="Build your own metaverse island" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Island composer</h1>
        <p>Build you own metaverse island</p>
        <Link href="/build">Start</Link>
      </main>
    </>
  );
}
