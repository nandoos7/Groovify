// Song data
const songs = [
    { 
        title: "Tu hai kahan", 
        artist: "AUR", 
        src: "tu hai kahan.mp3", 
        cover: "download(5).jpeg" 
    },
    { 
        title: "Mere mehboob qyaamat hogi", 
        artist: "Kishore Kuamr,Laxmikant-Pyarelal", 
        src: "mere mehboob qyamat hogi.mp3", 
        cover: "download (4).jpeg" 
    },
    { 
        title: "Banjaara", 
        artist: "Mohammed Irfan", 
        src: "banjaara.mp3", 
        cover: "download.jpeg" 
    },
    { 
        title: "Dhiktana Dhikhtana", 
        artist: "Mad Trip", 
        src: "dikhtana.mp3", 
        cover: "download (2).jpeg" 
    },
    { 
        title: "Chhaila", 
        artist: "Shreya Ghoshal,Sunidhi Chauhan", 
        src: "Chhaila.mp3", 
        cover: "download (1).jpeg" 
    },
];

// DOM Elements
const songList = document.getElementById("song-list");
const audio = document.getElementById("audio");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");
const albumCover = document.getElementById("album-cover");

// Populate song list
songs.forEach((song, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = song.title;
    button.addEventListener("click", () => playSong(index));
    li.appendChild(button);
    songList.appendChild(li);
});

// Play selected song
function playSong(index) {
    const selectedSong = songs[index];
    audio.src = selectedSong.src;
    songTitle.textContent = selectedSong.title;
    artistName.textContent = selectedSong.artist;
    albumCover.src = selectedSong.cover;
    audio.play();
}