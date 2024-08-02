import Level from "../classes/Level.js";
import Map from "../classes/Map.js";
import Generation from "./generation.js";
import showRoom from "./showRoom.js";

function NewLevel(entranceSide){


    let newLevel = Generation(entranceSide);
    let levelNew = new Level(newLevel);         // in local storage
    document.querySelector('#opened-rooms').textContent = 1;
    localStorage.setItem("openedRooms", "1")
    document.querySelector('#total-rooms').textContent = levelNew.rooms;
    let score = localStorage.getItem("score")
    let newScore = Number(score) + 1
    localStorage.setItem("score", newScore)
    document.querySelector('.score').textContent = score
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]))
    let NowMap = new Map(levelNew);
    NowMap.nowMap(nowX, nowY);
    showRoom(levelNew.adaptedLevel[nowY][nowX]);
    return NowMap;
}

export default NewLevel;