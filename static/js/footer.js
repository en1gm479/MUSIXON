let track_art = document.querySelector(".image_change");
let track_name = document.querySelector(".song_name_fo");


let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");


let curr_track = document.createElement('audio');
let track_index = 0;
let isPlaying = false;

let track_list = [
    {
        name: "Night Owl",
        artist: "Broke For Free",
        image: "Image URL",
        path: "../../audio/High Rated Gabru (Guru Randhawa) DJ Abhi Remix.mp3",
    },
    {
        name: "Enthusiast",
        artist: "Tours",
        image: "Image URL",
        path: "../../audio/High Rated Gabru (Guru Randhawa) DJ Abhi Remix.mp3",
    },
    {
        name: "Shipping Lanes",
        artist: "Chad Crouch",
        image: "Image URL",
        path: "../../audio/High Rated Gabru (Guru Randhawa) DJ Abhi Remix.mp3",
    },
    ];



    function load(track_index){
        
        // Load a new track
        curr_track.src = track_list[track_index].path;
        curr_track.load();
        
        // Update details of the track
        // track_art.style.Image =
        //     "/img/login-1.jpeg";
        // track_name.textContent = track_list[track_index].name;

        
        // Move to the next track if the current finishes playing
        // using the 'ended' event
        curr_track.addEventListener("ended", nextTrack);
        
}load(0);


function loadTrack(obje) {
    
    // Load a new track
    curr_track.src = track_list[0].path;
    curr_track.load();
    
   // Update details of the track
    track_art.style.backgroundImage = "url(" +obje.Image_s + ")";
    track_name.textContent = obje.songName;
    
    // Move to the next track if the current finishes playing
    // using the 'ended' event
    curr_track.addEventListener("ended", nextTrack);
    }
    
    

    function playpauseTrack() {
        // Switch between playing and pausing
        // depending on the current state
        if (!isPlaying) playTrack();
        else pauseTrack();
        }
        
        function playTrack() {
        // Play the loaded track
        curr_track.play();
        isPlaying = true;
        
        // Replace icon with the pause icon
        playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-2x"></i>';
        }
        
        function pauseTrack() {
        // Pause the loaded track
        curr_track.pause();
        isPlaying = false;
        
        // Replace icon with the play icon
        playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-2x"></i>';
        }
        
        function nextTrack() {
        // Go back to the first track if the
        // current one is the last in the track list
        if (track_index < track_list.length - 1)
            track_index += 1;
        else track_index = 0;
        console.log("mai kam kr rha hu");
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }
        
        function prevTrack() {
        // Go back to the last track if the
        // current one is the first in the track list
        if (track_index > 0)
            track_index -= 1;
        else track_index = track_list.length - 1;
        
        // Load and play the new track
        loadTrack(track_index);
        playTrack();
        }


    async function songtofooter(url){
    console.log(url);
    await fetch("../../data/loop.json")
    .then((response1) => response1.json()
    ).then((data)=>{
        for(var i = 0;i<data.data.length;i++){
            if(data.data[i].id==url){
                loadTrack(data.data[i]);
            }
        }
    })

    }