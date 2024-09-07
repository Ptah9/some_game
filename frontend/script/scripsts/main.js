import Map from "../classes/Map.js";
import showRoom from '../functions/showRoom.js';
import NewLevel from "../functions/newLevel.js";

import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";
import IsUserNew from "../functions/interactionWithAPI/isUserNew.js";
import getRefs from "../functions/interactionWithAPI/testGetRefs.js";
import initUser from "../functions/interactionWithAPI/testInitUser.js";




const upButton = document.querySelector('#up-button'),
    rightButton = document.querySelector('#right-button'),
    bottomButton = document.querySelector('#bottom-button'),
    leftButton = document.querySelector('#left-button'),
    body = document.querySelector('#body'),
    staminaCounter = document.querySelector(".now-stamina"),
    staminaMax = document.querySelector(".max-stamina"),
    healthScale = document.querySelector('.health-scale');

// ---------------------------------------------------------



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
        let refCode = await prompt("enter ref-code")
        await initUser(refCode);
        NowMap = await NewLevel(3)

        staminaCounter.textContent = 200; 
        staminaMax.textContent = 200;
    }
    else{
        let levelNow = await Get('levelNow');
        nowY = Number(await Get('nowY'));
        nowX = Number(await Get('nowX'));
        let openedLevel = await Get("openedLevel");
        NowMap = new Map(levelNow, openedLevel);
        showRoom(levelNow.adaptedLevel[nowY][nowX]);
        NowMap.nowMap(nowX, nowY);
        document.querySelector('.igreks').textContent = await Get("igreks");
        document.querySelector('#opened-rooms').textContent = await Get("openedRooms");
        document.querySelector('#total-rooms').textContent = levelNow.rooms;
        let stamina = await Get("stamina")
        let maxStamina = await Get("maxStamina")
        staminaCounter.textContent = stamina;
        staminaMax.textContent = maxStamina;
        
        healthScale.style.width = (100 - (stamina / maxStamina * 100)) + "%";
        setTimeout(() => {  
            healthScale.style.transition = "0s"
        }, 150);
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

const igrek = document.querySelector('.igrek-div')

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}



