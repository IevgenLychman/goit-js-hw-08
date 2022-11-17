import vimeoPlayer from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new vimeoPlayer(iframe);

player.on('play', function () {
  localStorage.setItem('duration', time);
  console.log(player.timeupdate);
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
