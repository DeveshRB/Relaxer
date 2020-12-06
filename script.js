const container = document.getElementById('container');
const text = document.getElementById('text');
const circle = document.getElementById('circle');
const pointer = document.getElementById('pointer-container');
const icon = document.getElementById('icon');

const totalTime = 7500;
const breatheTime = (totalTime/5)*2;
const holdTime = totalTime/5;


breatheAnimation();

icon.addEventListener('click',()=>{
    playSong();
    // breatheAnimation();
    // pauseSong();
});


// Function 

function playSong() {
    
    document.querySelector('i.fas').classList.remove('fa-play');
    document.querySelector('i.fas').classList.add('fa-pause');
    var audio = new Audio('OM.mp3');
    audio.play();
  }
  
  // Pause song
//   function pauseSong() {
    
//     document.querySelector('i.fas').classList.add('fa-play');
//     document.querySelector('i.fas').classList.remove('fa-pause');
//     var audio = new Audio('OM.mp3');
//     audio.pause();
//     audio.currentTime = 0;
//   }

function breatheAnimation(){
    text.innerText = "Breathe In!";
    container.className = 'container grow';
    

    setTimeout(()=>{
        text.innerText = "Hold";
        
        setTimeout(()=>{

            text.innerText = "Breathe Out!";
            container.className = 'container shrink';
            
        },holdTime)
        
    },breatheTime);
}

setInterval(breatheAnimation,totalTime);



