


export function createAudioTimer({ url, Howl }) {

  const sound = new Howl({
    src: [url],
    html5: true
  });

  return {

    play() {
      sound.play();
    },

    pause() {
      sound.pause();
    },

    seek(t) {
      sound.seek(t);
    },

    now() {
      const position = sound.seek();
      return typeof position === "number" ? position : 0;
    }

  };

}