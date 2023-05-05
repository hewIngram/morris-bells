import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div>
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
