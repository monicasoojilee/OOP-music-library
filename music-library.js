// NEW LIBRARY
let Library = function(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlist = [];
}

Library.prototype.addPlaylist = function(newPlaylist) {
    return this.playlist.push(newPlaylist);
}

// NEW PLAYLIST
let Playlist = function(name) {
    this.name = name;
    this.tracklist = [];
}

Playlist.prototype.addTracks = function(newTrack) {
    return this.tracklist.push(newTrack);
}

Playlist.prototype.overallRating = function() {
    let rating = 0;
    this.tracklist.forEach(function(track){
        rating += track.rating;
    });
    return rating / this.tracklist.length;
}

Playlist.prototype.totalDuration = function() {
    let duration = 0;
    this.tracklist.forEach(function(track){
        duration += track.length;
    });
    return duration;
}

// NEW TRACK
let Track = function(title, rating, length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
}

// --------------- INSTANTIATE --------------- //

let myLibrary = new Library("My Theme Music", "Bassem");
let newPlaylist = new Playlist("Glamour Gals Galloping GALA Music");
let newTrack = new Track("Reflection", 5, 157)
let newTrack1 = new Track("Defying Gravity", 3, 358)

newPlaylist.addTracks(newTrack);
newPlaylist.addTracks(newTrack1);
console.log(newPlaylist);
myLibrary.addPlaylist(newPlaylist);
console.log(myLibrary);
console.log(newPlaylist.overallRating());
console.log(newPlaylist.totalDuration());


