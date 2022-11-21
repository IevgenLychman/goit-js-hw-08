import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'Video current time';
const getCurrentTime = localStorage.getItem(LOCAL_STORAGE_KEY) || 0;
player.setCurrentTime(getCurrentTime);

function onPlay({ seconds }) {
  localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
}
player.on('timeupdate', throttle(onPlay, 1500));

player.on('play', function () {
  player.getCurrentTime().then(function (seconds) {});
});
