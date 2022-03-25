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
    draw() {
        text(this.name, this.x, this.y + 50);
        if (dist(mouseX, mouseY, this.x, this.y) < 60 && mouseIsPressed) {
            console.log("click");
            this.playSong();
        }
    }
    playSong() {
        this.audio.play()
    }
}