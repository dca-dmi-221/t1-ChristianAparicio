class Pantalla {
    constructor({
        background,
        songs,
        buttonPause,
        buttonPlay,
        colorText,
        textColorSongs,
    }) {
        this.background = background;
        this.songs = songs;
        this.bgImage = loadImage(background);
        this.songCards = [];
        this.buttonPause = buttonPause;
        this.buttonPlay = buttonPlay;
        this.colorText=colorText;
        this.button = new Button({
            x: 968,
            y: 520,
            imagePause: buttonPause,
            imagePlay: buttonPlay
        });

        this.songs.forEach((item, id) => {
            const posY = id > 2 ? 2 : 1
            const posX = id > 2 ? id - 3 : id
            const newSong = new Song({
                textColor: textColorSongs,
                name: item.name.toUpperCase(),
                movie: item.movie,
                location: item.location,
                x: (posX + 1) * 200,
                y: (230 * posY) + 70,
            })
            this.songCards.push(newSong);
        });
        this.selectedSong = this.songCards[0];
        this.isPlaying= false;

        this.sliderSong= new Slider({type: "song", color:"#d31b67", duration:this.selectedSong.getAudio().duration()})
this.sliderVolume= new Slider({type: "volume"});
    }
    draw() {
        imageMode(CORNER);
        image(this.bgImage, 0, 0);
       
        this.songCards.forEach((song) => {
            song.draw();
            if (dist(mouseX, mouseY, song.getX(), song.getY()) < 60 && mouseIsPressed) {
                this.selectedSong.stopSong();
                this.isPlaying= false;
                this.button.setIsPlaying(this.isPlaying);
                
                this.selectedSong = song;
                this.sliderSong.setDuration(this.selectedSong.getAudio().duration());
            
            }

        })
        textAlign(CENTER);
        textSize(20);
        fill(this.colorText);
        text(this.selectedSong.getName(), 977, 367);
        this.button.draw();

        this.sliderSong.draw(this.selectedSong.getAudio().time(),this.selectedSong.getAudio().duration());
        
    }
    mouseClicked(){
        if(dist(mouseX, mouseY, this.button.getX(), this.button.getY()) < 60){
    
            if(!this.isPlaying){
                this.selectedSong.playSong()
            }else{
                this.selectedSong.pauseSong()
            }
            this.isPlaying= !this.isPlaying;
            this.button.setIsPlaying(this.isPlaying);
        }
    }
    stopPlaylist(){
        this.selectedSong.stopSong();
        this.isPlaying= false;
        this.button.setIsPlaying(this.isPlaying);
    }

    mouseDragged(){
        this.sliderSong.mouseDragged(this.selectedSong.getAudio())
    }
}