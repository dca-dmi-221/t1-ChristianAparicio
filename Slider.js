class Slider {
    constructor({
        type,
        color,
        duration
    }) {
        this.type = type;
        this.color = color;
        this.duration = duration;
        this.x = 855;
        if(type==="song"){
        this.y = 415;}
        if(type==="volume"){
            this.y = 415+25;}
        this.height = 7;
        this.width = 240;
        this.bgColor = 'rgba(50, 50,50, 0.5)';
      
    }
    setDuration(newDuration) {
        this.duration = newDuration;
    }

    draw(time, duration) {
        rectMode(CORNER);
        noStroke();
        fill(color(this.bgColor));
        rect(this.x, this.y, this.width, this.height)

        if (this.type === "song") {
            const mapTime = map(time, 0, duration, 0, this.width);

            fill(this.color);
            rect(this.x, this.y, mapTime, this.height)
        }
this.duration=duration;
    }
    mouseDragged(song) {

        const bonderies = {
            x1: this.x,
            x2: this.x + this.width,
            y1: this.y-5,
            y2:this.y + this.height + 5,
        }
        const isInRange = mouseX > bonderies.x1 && mouseX < bonderies.x2;
        if (isInRange) {
        //   this.bola.x = mouseX;

            if (this.type === "volume") {
                const volume = map(mouseX, bonderies.x1, bonderies.x2, 0, 100) / 100;
                this.song.setVolume(volume)
            } else if (this.type === "song") {
                console.log(song.duration());
                const head = map(mouseX, bonderies.x1, bonderies.x2, 0, song.duration());
                console.log(head+" "+"tiempo actual");
                song.time(head)
            }
        }
    }
}