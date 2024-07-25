import Level from "../classes/Level.js";
import Map from "../classes/Map.js";
import Generation from "./generation.js";
import showRoom from "./showRoom.js";

import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";

function NewLevel(entranceSide){


    let newLevel = Generation(entranceSide);
    let levelNew = new Level(newLevel);         // in local storage
    document.querySelector('#opened-rooms').textContent = 1;
    Put("openedRooms", "1")
    document.querySelector('#total-rooms').textContent = levelNew.rooms;
    Get("score").then((score)=>{
        let newScore = Number(score) + 1
        Put("score", newScore)
        document.querySelector('.score').textContent = score
    })
    Put('levelNow', JSON.stringify(levelNew));
    let nowY = levelNew.startY;
    let nowX = levelNew.startX;
    Put('nowX', nowX);
    Put('nowY', nowY);
    Put('openedLevel', JSON.stringify([
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
    console.log(nowX)
    console.log(nowY)
    console.log(NowMap)
    NowMap.nowMap(nowX, nowY);
    return NowMap;
}

export default NewLevel;