import Level from "../classes/Level.js";
import Map from "../classes/Map.js";
import Generation from "./generation.js";
import showRoom from "./showRoom.js";

function NewLevel(entranceSide){
    localStorage.openedRooms = 1

    let newLevel = Generation(entranceSide);
    let levelNew = new Level(newLevel);         // in local storage
    document.querySelector('#opened-rooms').textContent = 1;
    localStorage.openedRooms = 1
    document.querySelector('#total-rooms').textContent = levelNew.rooms;
    localStorage.score = Number(localStorage.score) + 1
    document.querySelector('.score').textContent = localStorage.score;
    localStorage.setItem('levelNow', JSON.stringify(levelNew));
    let nowY = levelNew.startY;
    let nowX = levelNew.startX;
    localStorage.setItem('nowX', nowX);
    localStorage.setItem('nowY', nowY);
    localStorage.setItem('openedLevel', JSON.stringify([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]));
    let NowMap = new Map(levelNew);
    showRoom(levelNew.adaptedLevel[nowY][nowX]);
    NowMap.nowMap(nowX, nowY);
    return NowMap;
}

export default NewLevel;