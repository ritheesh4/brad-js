// let fiat = {
//   make: "Fiat",
//   // other properties are here, we're just saving space
//   started: false,
//   start: function () {
//     this.started = true;
//   },
//   stop: function () {
//     this.started = false;
//   },
//   drive: function () {
//     if (this.started) {
//       alert("Zoom zoom!");
//     } else {
//       alert("You need to start the engine first.");
//     }
//   },
// };

let song = {
  name: "Walk This Way",
  artist: "Run-D.M.C.",
  minutes: 4,
  seconds: 3,
  genre: "80s",
  playing: false,
  play: function () {
    if (!playing) {
      this = true;
      console.log("Playing " + name + " by " + artist);
    }
  },
  pause: function () {
    if (playing) {
      this.playing = false;
    }
  },
};
this.play();
this.pause();
