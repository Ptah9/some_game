import Level from "../classes/Level.js";
import Map from "../classes/Map.js";
import getGeneration from "./interactionWithAPI/getGeneration.js";
import showRoom from "./showRoom.js";

import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";

async function NewLevel(entranceSide){

    let newLevel =  await getGeneration(entranceSide);
    let levelNew = new Level(newLevel);
    await Put('levelNow', levelNew);
    document.querySelector('#opened-rooms').textContent = 1;
    await Put("openedRooms", 1);
    document.querySelector('#total-rooms').textContent = levelNew.rooms;

    let score = await Get("score");
    let newScore = Number(score) + 1;
    await Put("score", newScore);
    document.querySelector('.igreks').textContent = await Get("igreks");

    let nowY = levelNew.startY;
    let nowX = levelNew.startX;
    await Put('nowX', nowX);
    await Put('nowY', nowY);

    let openedLevel = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
    openedLevel[nowY][nowX] = 2;
    await Put('openedLevel', openedLevel);
    let NowMap = new Map(levelNew, openedLevel);

    NowMap.nowMap(nowX, nowY);
    showRoom(levelNew.adaptedLevel[nowY][nowX]);
    return NowMap;
}

export default NewLevel;