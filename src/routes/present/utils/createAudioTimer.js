export function createAudioTimer({ url, Howl }) {

  let sound = null;

  function getSound() {
    if (!sound) {

      console.log("Creating Howl:", url);

      sound = new Howl({
        src: [url],
        html5: true,

        onload() {
          console.log("Howl: loaded");
        },

        onplay() {
          console.log("Howl: playing");
        },

        onpause() {
          console.log("Howl: paused");
        },

        onend() {
          console.log("Howl: ended");
        },

        onloaderror(id, error) {
          console.error("Howl: load error", id, error);
        },

        onplayerror(id, error) {
          console.error("Howl: play error", id, error);
        }
      });
    }

    return sound;
  }

  return {

    play() {
      console.log("Timer.play()");
      const id = getSound().play();
      console.log("play() returned:", id);
    },

    pause() {
      if (sound) {
        console.log("Timer.pause()");
        sound.pause();
      }
    },

    seek(t) {
      const s = getSound();

      if (typeof t === "number") {
        console.log("Timer.seek()", t);
        s.seek(t);
      }

      return s.seek();
    },

    now() {
      if (!sound) {
        return 0;
      }

      const position = sound.seek();
      return typeof position === "number" ? position : 0;
    }

  };

}