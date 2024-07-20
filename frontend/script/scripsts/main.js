import Map from "../classes/Map.js";
import showRoom from '../functions/showRoom.js';
import NewLevel from "../functions/newLevel.js";


const upButton = document.querySelector('#up-button'),
    rightButton = document.querySelector('#right-button'),
    bottomButton = document.querySelector('#bottom-button'),
    leftButton = document.querySelector('#left-button'),
    body = document.querySelector('#body');

// ---------------------------------------------------------

let max_health = 1000,
    health = 1000;
localStorage.mapClosed = true;
localStorage.weaponClosed = true;

//------------------------------------

let nowY;
let nowX;
let NowMap;

localStorage.sword = "Purple Sword";
localStorage.magic = "Purple Magic";
localStorage.shield = "Purple Shield";
localStorage.ring = "Purple Ring";

// -------------------------

if (JSON.parse(localStorage.getItem('levelNow'))) {
    let levelNow = JSON.parse(localStorage.getItem('levelNow'));
    nowY = Number(localStorage.getItem('nowY'));
    nowX = Number(localStorage.getItem('nowX'));
    NowMap = new Map(levelNow)
    showRoom(levelNow.adaptedLevel[nowY][nowX])
    NowMap.nowMap(nowX, nowY);
    document.querySelector('.score').textContent = localStorage.score;
    document.querySelector('#opened-rooms').textContent = localStorage.openedRooms;
    document.querySelector('#total-rooms').textContent = levelNow.rooms;
}
else{
    localStorage.score = 0;
    NowMap = NewLevel(3)
}

// ------------------------------------------------------------------

import {goUp, goRight, goDown, goLeft} from '../functions/goTo.js';

body.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    if (event.code == "ArrowUp") {
        goUp(NowMap)
    }
    if (event.code == "ArrowRight") {
        goRight(NowMap)
    }
    if (event.code == "ArrowDown") {
        goDown(NowMap)
    }
    if (event.code == "ArrowLeft") {
        goLeft(NowMap)
    }
});

upButton.addEventListener("click", ()=> {           // TODO: сделать адекватно блин
    goUp(NowMap)
});
rightButton.addEventListener("click", ()=> {
    goRight(NowMap)
});
bottomButton.addEventListener("click", ()=> {
    goDown(NowMap)
});
leftButton.addEventListener("click", ()=> {
    goLeft(NowMap)
});


// ------------ part 2 -------------- \\




class weaponItem {
    constructor(name, shortDesc, description, power) {
        this.name = name;
        this.shortDesc = shortDesc;
        this.description = description;
        this.power = power;
    }
}
// part 3

// import analyze from 'rgbaster'
// const result = await analyze('https://i.ibb.co/0jH5ZRb/image.jpg') // also supports base64 encoded image strings
// nickname.style.color = result[0].color

