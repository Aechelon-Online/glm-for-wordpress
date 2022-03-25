const videoConsole = document.querySelector('.video-wrapper')
const video = videoConsole.querySelectorAll('.video')
const playButton = document.querySelectorAll('.play-button')
const volume = videoConsole.querySelectorAll('.volume')
const currentTimeElement = videoConsole.querySelectorAll('.current')
const durationTimeElement = videoConsole.querySelectorAll('.duration')
const progress = videoConsole.querySelectorAll('.video-progress')
const progressBar = videoConsole.querySelectorAll('.video-progress-filled')





const videos = {
    'https://www.youtube.com/embed/a4hIagju_sk': 'Greg Luce Music - Promo Video',
    'https://www.youtube.com/embed/b7fEKZ8TE1E': 'Private Party - Listen To The Music',
    'https://www.youtube.com/embed/n60Pm7AsEB0': 'Rocket Man - Prestonwood CC'
    }

let videoPlayer = ""
for (let [url, title] of Object.entries(videos)) {

videoPlayer += `
    <div class="video-player">
        <iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen class="video"></iframe>
        <h4 class="video-text">${title}</h4>
    </div>
    `
}


document.querySelector('.video-wrapper').innerHTML = videoPlayer


// document.querySelectorAll('.play-button').addEventListener('click', function(e){
//     if (video.paused) {
//         video.play()
//         e.target.textContent = '❚❚'
//     } else {
//         video.pause()
//         e.target.textContent = '▶'
//     }
    
// })

{/* <div class="player-controls">
            <div class="video-progress">
                <div class="video-progress-filled"></div>
            </div>

            <button class="play-button" title="play">▶</button>

            <input type="range" class="volume" min="0" max="1" step="0.01" value="1" />
    
            <div class="time">
                <span class="current">0:00</span> / <span class="duration">0:00</span>
            </div>
        </div> */}