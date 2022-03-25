let confessions;
let mean;
let freaky;
let speak;

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
      name: "Me Vs The World",
      movie: "Happy Together",
      location: "Freaky/simple-plan-happy-togetherfreaky-friday-soundtrack.mp3",
      },
      {  
        name: "Ultimate",
        movie: "Ultimate",
        location: "Freaky/ultimate-from-freaky-fridaysoundtrack-version.mp3",
        }, 
     
];

const speakSongs = [{}];


function setup() {
  createCanvas(1400, 900);
  confessions = new Pantalla({
    background: "backgrounds/confessions.png",
    songs: confessionsSongs
  })

  mean = new Pantalla({
    background: "backgrounds/mean.png",
    songs: meanSongs
  })

freaky = new Pantalla({
    background: "backgrounds/freaky.png",
    songs: freakySongs
  })

 speak = new Pantalla({
    background: "backgrounds/speak.png",
    songs: speakSongs
  })

}

function draw() {
  background(220);
  confessions.draw();
}