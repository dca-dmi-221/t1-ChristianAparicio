class Song {
    constructor({
        name,
        movie,
        x,
        y,
        location
    }) {
        this.name = name;
        this.movie = movie;
        this.x = x;
        this.y = y;
        this.location = location;
        this.audio = createAudio(location);

    }
    getName(){
        return this.name
    }
    getX(){
        return this.x
    }
    getY(){
        return this.y
    }
    getAudio(){
        return this.audio
    }
    draw() {
        textAlign(LEFT);
        textSize(14);
        text(this.name, this.x, this.y + 50);
        /*if (dist(mouseX, mouseY, this.x, this.y) < 60 && mouseIsPressed) {
            this.playSong();
        }*/
    }
    playSong() {
        this.audio.play()
    }
    pauseSong(){
        this.audio.pause()
    }
    stopSong(){
        this.audio.stop();
    }
    
    validateSongChange(selectedSong){
        if(dist(mouseX, mouseY, this.x, this.y) < 60 && mouseIsPressed){
            selectedSong= this
        }
    }
}