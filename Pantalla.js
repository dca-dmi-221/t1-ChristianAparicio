class Pantalla {
    constructor({
        background,
        songs
    }) {
        this.background = background;
        this.songs = songs;
        this.bgImage = loadImage(background);
        this.songCards= [];
        console.log(songs);
        this.songs.forEach((item, id) => {
            const newSong= new Song({
                name: item.name, 
                movie: item.movie,
                location: item.location,
                x: (id+1)*200,
                y: 300
            })
            this.songCards.push(newSong);
        });

    }
    draw() {
        image(this.bgImage, 0, 0);
        this.songCards.forEach((song)=>{
            song.draw();
        })
    }
}