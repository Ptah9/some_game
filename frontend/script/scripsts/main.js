import Map from "../classes/Map.js";
import showRoom from '../functions/showRoom.js';
import NewLevel from "../functions/newLevel.js";

// import Get from "../functions/interactionWithAPI/testGet.js";
// import Put from "../functions/interactionWithAPI/testPut.js";
// import IsUserNew from "../functions/interactionWithAPI/isUserNew.js";




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

// Put("sword", "Purple Sword");
// Put("magic", "Purple Magic");
// Put("shield", "Purple Shield");
// Put("ring", "Purple Ring");
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
    localStorage.score = 1;
    NowMap = NewLevel(3)
}



// IsUserNew().then((a)=>{
//     if (a) {
//         Get("levelNow").then((resp)=>{
//             levelNow = resp
//             NowMap = new Map(levelNow)
//             Get("nowY").then((resp1)=>{
//                 nowY = resp1
//                 Get("nowX").then((resp2)=>{
//                     nowX = resp2

//                     showRoom(levelNow.adaptedLevel[nowY][nowX])
//                     NowMap.nowMap(nowX, nowY);

//                 })
//             })

//         })

//         Get("score").then((resp)=>document.querySelector('.score').textContent = resp)
        
//         Get("openedRooms").then((resp)=>document.querySelector('#opened-rooms').textContent = resp)

//         Get("rooms").then((resp)=>document.querySelector('#total-rooms').textContent = resp)

//     }
//     else{
//         Put("score", "0");  
//         NowMap = NewLevel(3)
//     }
// })

// ------------------------------------------------------------------

import goTo from '../functions/goTo.js';

body.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    if (event.code == "ArrowUp") {
        goTo("up", NowMap)
    }
    if (event.code == "ArrowRight") {
        goTo("right", NowMap)
    }
    if (event.code == "ArrowDown") {
        goTo("down", NowMap)
    }
    if (event.code == "ArrowLeft") {
        goTo("left", NowMap)
    }
});

upButton.addEventListener("click", ()=> {           // TODO: сделать адекватно блин
    goTo("up", NowMap)
});
rightButton.addEventListener("click", ()=> {
    goTo("right", NowMap)
});
bottomButton.addEventListener("click", ()=> {
    goTo("down", NowMap)
});
leftButton.addEventListener("click", ()=> {
    goTo("left", NowMap)
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

