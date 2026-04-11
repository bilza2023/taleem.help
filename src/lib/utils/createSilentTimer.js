
// createSilentTimer.js

import { Timer } from "taleem-pam";

export function createSilentTimer() {
  const timer = new Timer();

  return {
    play() {
      timer.play();
    },

    pause() {
      timer.pause();
    },

    seek(t) {
      timer.seek(t);
    },

    now() {
      return timer.now();
    }
  };
}
