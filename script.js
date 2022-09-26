console.log("Welcome to KKMusic");


let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('SongItem'));

let songs = [
    {songName:"Ed Sheeran - Perfect", filePath: "Songs/1.mp3", coverPath : "Posters/PerfectPoster.jpg"},
    {songName: "Harry Styles - As It Was", filePath: "Songs/2.mp3", coverPath: "Posters/AsItWasPoster.jpg"},
    {songName: "DJ Snake - Let Me Love You", filePath: "Songs/3.mp3", coverPath: "Posters/LetMeLoveYouPoster.jpg"},
    {songName :"Justin Bieber - Baby", filePath: "Songs/4.mp3", coverPath: "Posters/BabyPoster.jpg"},
    {songName: "Arcane League of Legends - Enemy", filePath: "Songs/5.mp3" ,coverPath : "Posters/EnemyPoster.jpg"},
    {songName: "Alan Walker - Faded", filePath: "Songs/6.mp3", coverPath:"Posters/FadedPoster.jpg"},
    {songName:"Dua Lipa - Levitating Featuring DaBaby", filePath:"Songs/7.mp3", coverPath:"Posters/LevitatingPoster.jpg"},
    {songName:"Aurora - Runaway", filePath:"Songs/8.mp3", coverPath: "Posters/RunawayPoster.jpg"},
    {songName: "Wiz Khalifa - See You Again", filePath: "9.mp3", coverPath:"Posters/SeeYouAgainPoster.jpg"},
    {songName:"Stephen Sanchez - Until I Found You", filePath:"Songs/10.mp3", coverPath: "Posters/UntilIfoundYouPoster.jpg"}
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
//Handle Play/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=> {
        makeAllPlays();
        if(audioElement.paused || audioElement.currentTime<=0){
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `songs/${songIndex+1}.mp3`;
            masterSongName.innerText = songs[songIndex].songName;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity = 1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else{
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
        }
        
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if (songIndex <= 0){
        songIndex = 0
    }
    else{
        songIndex -=1;
    }
    audioElement.src = `Songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})