import { Button } from "../components/Button.tsx";
import { asset, IS_BROWSER } from "$fresh/runtime.ts";
import ShakeDetector from "https://esm.sh/shake-detector";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const audio = IS_BROWSER ? new Audio(asset("/bells.mp3")) : null;

  const playSound = () => {
    console.log("SOUND");
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      audio.play();
    } else {
      console.log("not in browser env");
    }
  };

  const shakeDetector = new ShakeDetector({
    threshold: 8,
    debounceDelay: 500,
  });
  shakeDetector.start();
  window.addEventListener(ShakeDetector.SHAKE_EVENT, playSound);
  return (
    <div>
      <Button onClick={playSound}>-1</Button>
    </div>
  );
}
