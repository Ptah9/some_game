import Map from "../classes/Map.js";
import showRoom from '../functions/showRoom.js';
import NewLevel from "../functions/newLevel.js";

import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";
import IsUserNew from "../functions/interactionWithAPI/isUserNew.js";




const upButton = document.querySelector('#up-button'),
    rightButton = document.querySelector('#right-button'),
    bottomButton = document.querySelector('#bottom-button'),
    leftButton = document.querySelector('#left-button'),
    body = document.querySelector('#body');

// ---------------------------------------------------------

let max_health = 1000,
    health = 1000;


//------------------------------------

let nowY;
let nowX;
let NowMap;
localStorage.userClosed = true;
localStorage.mapClosed = true;
localStorage.leaderboardClosed = true;
localStorage.backpackClosed = true;

// -------------------------
async function newStart(){
    if (await IsUserNew()) {
    // if (true) {
        await Put("sword", "Purple Sword");
        await Put("magic", "Purple Magic");
        await Put("shield", "Purple Shield");
        await Put("ring", "Purple Ring");
        await Put("score", 0)
        NowMap = await NewLevel(3)
    }
    else{
        let levelNow = await Get('levelNow');
        nowY = Number(await Get('nowY'));
        nowX = Number(await Get('nowX'));
        let openedLevel = await Get("openedLevel");
        NowMap = new Map(levelNow, openedLevel);
        showRoom(levelNow.adaptedLevel[nowY][nowX]);
        NowMap.nowMap(nowX, nowY);
        document.querySelector('.score').textContent = await Get("score");
        document.querySelector('#opened-rooms').textContent = await Get("openedRooms");
        document.querySelector('#total-rooms').textContent = levelNow.rooms;
    }
}

newStart();

//---------------------------------------

import goTo from '../functions/goTo.js';

body.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    if (event.code == "ArrowUp") {
        goTo("up", NowMap);
    }
    if (event.code == "ArrowRight") {
        goTo("right", NowMap);
    }
    if (event.code == "ArrowDown") {
        goTo("down", NowMap);
    }
    if (event.code == "ArrowLeft") {
        goTo("left", NowMap);
    }
});

upButton.addEventListener("click", ()=> {           // TODO: сделать адекватно блин
    goTo("up", NowMap);
});
rightButton.addEventListener("click", ()=> {
    goTo("right", NowMap);
});
bottomButton.addEventListener("click", ()=> {
    goTo("down", NowMap);
});
leftButton.addEventListener("click", ()=> {
    goTo("left", NowMap);
});


// ------------ part 2 -------------- \\




// class weaponItem {
//     constructor(name, shortDesc, description, power) {
//         this.name = name;
//         this.shortDesc = shortDesc;
//         this.description = description;
//         this.power = power;
//     }
// }
// part 3

// import analyze from 'rgbaster'
// const result = await analyze('https://i.ibb.co/0jH5ZRb/image.jpg') // also supports base64 encoded image strings
// nickname.style.color = result[0].color

