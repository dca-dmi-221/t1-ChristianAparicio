class TextButton {
    constructor({
        text,
        color,
        x,
        y
    }) {
        this.text = text;
        this.color = color;
        this.x = x;
        this.y = y;
        this.w = 145;
        this.h = 35;
    }
    draw() {
        textAlign(CENTER);
        fill(color(this.color));
        rect(this.x, this.y, this.w, this.h, this.h / 2);
        fill(255);
        textSize(13);
        text(this.text, this.x+(this.w/2), this.y+(this.h/2)+4);
    }

    validateMouseClick() {
        const bonderies = {
            x1: this.x,
            x2: this.x + this.w,
            y1: this.y ,
            y2: this.y + this.h,
        }
        const isInRange = mouseX > bonderies.x1 && mouseX < bonderies.x2 && mouseY > bonderies.y1 && mouseY < bonderies.y2;
       
        return isInRange;
    }
}