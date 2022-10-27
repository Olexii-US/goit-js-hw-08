import Player from '@vimeo/player'
import throttle from 'lodash.throttle'


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    //////////////////
const STORAGE_KEY = "videoplayer-current-time";

    const timeUpdate = function (data) {
        console.log(data.seconds)

        localStorage.setItem(STORAGE_KEY, data.seconds)

    }
player.on('timeupdate', throttle(timeUpdate, 1000));
    
getStorageData()

function getStorageData() {
    const restarPlayerTime = localStorage.getItem(STORAGE_KEY)
    if (restarPlayerTime) {
        setPlayerTime(restarPlayerTime)

        console.log(restarPlayerTime)
    }
}

function setPlayerTime(restarPlayerTime) {
    player.setCurrentTime(restarPlayerTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

} 
