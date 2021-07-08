const videoElem = document.querySelector('#vision-video');
const playButton = document.querySelector('#play-video-btn');

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add('playing');
  } catch (err) {
    playButton.classList.remove('playing');
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
    togglePlayButtonText();
  } else {
    videoElem.pause();
    playButton.classList.remove('playing');
    togglePlayButtonText();
  }
}

function togglePlayButtonText() {
  const playButtonText = 'Watch video';
  const pauseButtonText = 'Pause video';
  playButton.innerHTML.includes(playButtonText)
    ? (playButton.innerHTML = pauseButtonText)
    : (playButton.innerHTML = playButtonText);
}

document
  .querySelector('#play-video-btn')
  .addEventListener('click', handlePlayButton);
