class Pantalla {
    constructor({
        background,
        songs,
        buttonPause,
        buttonPlay,
        colorText,
        textColorSongs,
        sliderColor,
        customPlaylist,
        hideButtons,
    }) {
        this.customPlaylist = customPlaylist;
        this.background = background;
        this.songs = songs;
        this.bgImage = loadImage(background);
        this.songCards = [];
        this.buttonPause = buttonPause;
        this.buttonPlay = buttonPlay;
        this.colorText = colorText;
        this.sliderColor = sliderColor;
        this.button = new Button({
            x: 968,
            y: 520,
            imagePause: buttonPause,
            imagePlay: buttonPlay
        });
        this.hideButtons = hideButtons;

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
            newSong.setVolume(0.5);
            newSong.getAudio().onended(() => this.changeNextSong());
            this.songCards.push(newSong);
        });
        this.selectedSong = this.songCards[0];
        this.isPlaying = false;

        this.sliderSong = new Slider({
            type: "song",
            color: this.sliderColor,
        })
        this.sliderVolume = new Slider({
            type: "volume",
            color: this.sliderColor
        });

        this.addButton = new TextButton({
            text: "+ Add to playlist",
            color: this.sliderColor,
            x: 811,
            y: 565,
        });

        this.myPlaylist = new TextButton({
            text: "My playlist",
            color: this.sliderColor,
            x: 977,
            y: 565,
        });


    }
    draw() {
        imageMode(CORNER);
        image(this.bgImage, 0, 0);

        this.songCards.forEach((song) => {
            song.draw();
        })

        textAlign(CENTER);
        textSize(20);
        fill(this.colorText);
        text(this.selectedSong.getName(), 977, 367);
        this.button.draw();

        this.sliderSong.draw(this.selectedSong.getAudio().time(), this.selectedSong.getAudio().duration());

        this.sliderVolume.draw();
        if (!this.hideButtons) {
            this.addButton.draw();
            this.myPlaylist.draw();
        }
    }
    mouseClicked() {
        if (dist(mouseX, mouseY, this.button.getX(), this.button.getY()) < 60) {

            if (!this.isPlaying) {
                this.selectedSong.playSong()
            } else {
                this.selectedSong.pauseSong()
            }
            this.isPlaying = !this.isPlaying;
            this.button.setIsPlaying(this.isPlaying);
        }
        this.songCards.forEach((song) => {
            song.draw();
            if (dist(mouseX, mouseY, song.getX(), song.getY()) < 60) {
                this.selectedSong.stopSong();
                this.isPlaying = false;
                this.button.setIsPlaying(this.isPlaying);

                this.selectedSong = song;
                this.selectedSong.setVolume(this.sliderVolume.getVolume());
            }

        })
        if (dist(mouseX, mouseY, 1057, 520) < 20) {
            this.changeNextSong();
        }
        if (dist(mouseX, mouseY, 880, 520) < 20) {
            this.changePreviousSong();
        }
        if (this.addButton.validateMouseClick()) {
            this.addToPlaylist();
        }
    }
    stopPlaylist() {
        this.selectedSong.stopSong();
        this.isPlaying = false;
        this.button.setIsPlaying(this.isPlaying);
    }

    mouseDragged() {
        this.sliderSong.mouseDragged(this.selectedSong.getAudio());
        this.sliderVolume.mouseDragged(this.selectedSong.getAudio());

    }
    changeNextSong() {
        this.selectedSong.stopSong();
        const currentSong = this.songCards.indexOf(this.selectedSong)
        if (this.songCards.length - 1 === currentSong) {
            this.selectedSong = this.songCards[0];
        } else {
            this.selectedSong = this.songCards[currentSong + 1];
        }
        if (this.isPlaying) {
            this.selectedSong.playSong();
        }
    }
    changePreviousSong() {
        this.selectedSong.stopSong();
        const currentSong = this.songCards.indexOf(this.selectedSong)
        if (currentSong === 0) {
            this.selectedSong = this.songCards[this.songCards.length - 1];
        } else {
            this.selectedSong = this.songCards[currentSong - 1];
        }
        if (this.isPlaying) {
            this.selectedSong.playSong();
        }

    }

    validatePlaylistButton() {
        return this.myPlaylist.validateMouseClick();
    }

    addToPlaylist() {
        const currentSong = this.songCards.indexOf(this.selectedSong)
        if (!(this.customPlaylist.includes(this.songs[currentSong]))) {
            if (this.customPlaylist.length === 6) {
                this.customPlaylist.shift();
            }
            this.customPlaylist.push(this.songs[currentSong]);
        }
    }
}