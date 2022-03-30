let confessions;
let mean;
let freaky;
let speak;
let playlist;

const confessionsSongs = [{
    name: "Walking on Sunshine",
    movie: "Confessions of a teenage drama queen",
    location: "Confessions/aly-aj-walking-on-sunshine.mp3"
  },
  {
    name: "That Girl",
    movie: "Confessions of a teenage drama queen",
    location: "Confessions/lindsay-lohan-confessions-of-a-teenage-drama-queen-song.mp3"
  },
  {
    name: "Don't Move On",
    movie: "Confessions of a teenage drama queen",
    location: "Confessions/lindsay-lohan-dont-move-on.mp3",
  },
  {
    name: "I'm Ready",
    movie: "Confessions of a teenage drama queen",
    location: "Confessions/confession-of-a-teenage-drama-queen-im-ready.mp3",
  },
  {
    name: "What Are You Waiting For",
    movie: "Confessions of a teenage drama queen",
    location: "Confessions/lindsay-lohan-what-are-you-waiting-for.mp3",
  },
  {
    name: "Tomorrow",
    movie: "Confessions of a teenage drama queen",
    location: "Confessions/tomorrow-lillix.mp3",
  }

];

const meanSongs = [{
    name: "Dancing With Myself",
    movie: "Mean Girls",
    location: "Mean/Dancing-With-Myself.mp3",
  },
  {
    name: "God Is A Dj",
    movie: "Mean Girls",
    location: "Mean/God-Is-A-DJ.mp3",
  },
  {
    name: "Milkshake",
    movie: "Mean Girls",
    location: "Mean/Milkshake.mp3",
  },
  {
    name: "One Way Or Another",
    movie: "Mean Girls",
    location: "Mean/One-Way-Or-Another.mp3",
  },
  {
    name: "Overdrive",
    movie: "Mean Girls",
    location: "Mean/Overdrive.mp3",
  },
];

const freakySongs = [{
    name: "Baby One More Time",
    movie: "Freaky Friday",
    location: "Freaky/bowling-for-soupbaby-one-more-time.mp3",
  },
  {
    name: "Fortune Cookie?",
    movie: "Freaky Friday",
    location: "Freaky/fortune-cookie-score-version.mp3",
  },
  {
    name: "Me Vs The World",
    movie: "Freaky Friday",
    location: "Freaky/halo-friendlies-me-vs-the-world.mp3",
  },
  {
    name: "Happy Together",
    movie: "Freaky Friday",
    location: "Freaky/simple-plan-happy-togetherfreaky-friday-soundtrack.mp3",
  },
  {
    name: "Ultimate",
    movie: "Ultimate",
    location: "Freaky/ultimate-from-freaky-fridaysoundtrack-version.mp3",
  },

];

const speakSongs = [{

    name: "First",
    movie: "Speak",
    location: "Speak/first.mp3",
  },
  {

    name: "Nobody 'Til You",
    movie: "Speak",
    location: "Speak/Nobody.mp3",
  },
  {

    name: "Over",
    movie: "Speak",
    location: "Speak/over.mp3",
  },
  {

    name: "Rumors",
    movie: "Speak",
    location: "Speak/Rumors.mp3",
  },
  {

    name: "Speak",
    movie: "Speak",
    location: "Speak/speak.mp3",
  },
  {

    name: "Symptoms Of You",
    movie: "Speak",
    location: "Speak\Symptoms.mp3",
  },
];


function setup() {
  createCanvas(1400, 900);
  playlist = 0;
  confessions = new Pantalla({
    textColorSongs: "#000",
    background: "backgrounds/confessions.png",
    buttonPause: "backgrounds/botonPause.png",
    buttonPlay: "backgrounds/botonPlay.png",
    songs: confessionsSongs,
    colorText: 0
  })

  mean = new Pantalla({
    textColorSongs: "#fff",
    background: "backgrounds/mean.png",
    buttonPause: "backgrounds/botonPause.png",
    buttonPlay: "backgrounds/botonPlay.png",
    songs: meanSongs,
    colorText: 0
  })

  freaky = new Pantalla({
    textColorSongs: "#000",
    background: "backgrounds/freaky.png",
    buttonPause: "backgrounds/botonPause.png",
    buttonPlay: "backgrounds/botonPlay.png",
    songs: freakySongs,
    colorText: 0
  })

  speak = new Pantalla({
    textColorSongs: "#000",
    background: "backgrounds/speak.png",
    buttonPause: "backgrounds/botonPause.png",
    buttonPlay: "backgrounds/botonPlay.png",
    songs: speakSongs,
    colorText: 255
  })

}

function draw() {
  background(220);
  switch (playlist) {
    case 0:
      confessions.draw();
      break;
    case 1:
      mean.draw();
      break;
    case 2:
      freaky.draw();
      break;
    case 3:
      speak.draw();
      break;
  }
}

function mouseClicked() {


  if (dist(mouseX, mouseY, 114, 684) < 100) {
    playlist = 1;
    freaky.stopPlaylist();
    speak.stopPlaylist();
    confessions.stopPlaylist();
  }
  if (dist(mouseX, mouseY, 421, 684) < 100) {
    playlist = 2;
    speak.stopPlaylist();
    mean.stopPlaylist();
    confessions.stopPlaylist();
  }
  if (dist(mouseX, mouseY, 720, 684) < 100) {
    playlist = 0;
    mean.stopPlaylist();
    freaky.stopPlaylist();
    speak.stopPlaylist();
  }
  if (dist(mouseX, mouseY, 1026, 684) < 100) {
    playlist = 3;
    mean.stopPlaylist();
    freaky.stopPlaylist();
    confessions.stopPlaylist();
  }

  switch (playlist) {
    case 0:
      confessions.mouseClicked();
      break;
    case 1:
      mean.mouseClicked();
      break;
    case 2:
      freaky.mouseClicked();
      break;
    case 3:
      speak.mouseClicked();
      break;
  }
}

function mouseDragged() {
  freaky.mouseDragged();
  mean.mouseDragged();
  speak.mouseDragged();
  confessions.mouseDragged();
}