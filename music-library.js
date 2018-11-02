

class Library {
    constructor(name, creator) {
        name = this.name,
        creator = this.creator,
        playlist = [];
    }

    addPlaylist() {

    }
}

class Playlist {
    constructor(name) {
        name = this.name
    }

    overallRating() {
// calculate the rating by averaging the rating of its tracks
    }

    totalDuration() {
// sum the duration of all of its tracks
    }
}

class Track {
    constructor(title, rating, length) {
        title = this.title,
        rating = this.rating,
        length = this.length
    }
}