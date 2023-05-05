import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Morris bells</title>
        <html style={{ margin: 0 }}></html>
        <body style={{ margin: 0 }}></body>
      </Head>
      <div style="width: 100vw; height: 100vh; background-color: blue; padding: 18px; background-color: #202124; display: flex; flex-direction: column; align-items: center; justify-content: center">
        <img
          src="/bells.png"
          width="auto"
          height="128"
          alt="bells"
          style="margin-bottom: 30px;"
        />
        <Counter />
      </div>
    </>
  );
}
