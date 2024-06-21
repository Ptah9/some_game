import Level from "../classes/Level.js";
import Map from "../classes/Map.js";
import Generation from "./generation.js";
import showRoom from "./showRoom.js";

function NewLevel(entranceSide){
    
    let newLevel = Generation(entranceSide);
    let levelNew = new Level(newLevel);         // in local storage
    localStorage.setItem('levelNow', JSON.stringify(levelNew));
    let nowY = levelNew.startY;
    let nowX = levelNew.startX;
    localStorage.setItem('nowX', nowX);
    localStorage.setItem('nowY', nowY);
    let NowMap = new Map(levelNew);
    showRoom(levelNew.adaptedLevel[nowY][nowX]);
    NowMap.nowMap(nowX, nowY);
    return NowMap;
}

export default NewLevel;