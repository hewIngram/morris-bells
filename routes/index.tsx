import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
        <html style={{ margin: 0 }}></html>
        <body style={{ margin: 0 }}></body>
      </Head>
      <div style="width: 100vw; height: 100vh; background-color: blue; padding: 18px; background-color: #202124; display: flex; flex-direction: column; align-items: center; justify-content: center">
        <img
          src="/53b8806b89ad80a58a54924fe8e8be84f7f8.png"
          width="128"
          height="128"
          alt="bells"
        />
        <Counter />
      </div>
    </>
  );
}
