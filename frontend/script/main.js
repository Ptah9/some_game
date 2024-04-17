import Generation from './generation.js';
import Connect from './fetches.js';

const healthScale = document.querySelector('.health-scale'),
    mapBtn = document.querySelector('#map-btn'),
    artifactsBtn = document.querySelector('#artifacts-btn'),
    weaponBtn = document.querySelector('#weapon-btn'),
    upGate = document.querySelector('#up-gate'),
    upButton = document.querySelector('#up-button'),
    rightGate = document.querySelector('#right-gate'),
    rightButton = document.querySelector('#right-button'),
    bottomGate = document.querySelector('#bottom-gate'),
    bottomButton = document.querySelector('#bottom-button'),
    leftGate = document.querySelector('#left-gate'),
    leftButton = document.querySelector('#left-button'),
    body = document.querySelector('#body'),
    mapArea = document.querySelector('.map-area'),
    exitMapBtn = document.querySelector('.exit-map-btn'),
    exitWeaponBtn = document.querySelector('.exit-weapon-btn'),
    weaponArea = document.querySelector('.weapon-area'),
    swordBtn = document.querySelector('#sword'),
    magicBtn = document.querySelector('#magic'),
    shieldBtn = document.querySelector('#shield'),
    ringBtn = document.querySelector('#ring'),
    weaponName = document.querySelector('.weapon-text h2'),
    weaponShortDesc = document.querySelector('.weapon-text h4'),
    weaponDesc = document.querySelector('.weapon-description p'),
    scoreSpan = document.querySelector('.score')
 
    // ---------------------------------------------------------

let max_health = 1000,
    health = 1000;

let mapClosed = true,
    weaponClosed = true;


class Room {
    constructor(up, right, bottom, left, contains, type) {
        this.upGate = up;
        this.rightGate = right;
        this.bottomGate = bottom;
        this.leftGate = left;
        this.contains = contains;     //chest/enemy/nothing
        this.type = type;     //entrance/exit/ordinary
    }

    showRoom() {
        if (this.upGate){
            if(this.upGate=="next"){
                upGate.style.backgroundColor = "rgb(140, 0, 255)";
            }
            else if(this.upGate=="back"){
                upGate.style.backgroundColor = "#2d2d2d";
            }
            else{
                upGate.style.backgroundColor = "#5c5c5c";
            }
        }
        else {
            upGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }


        if (this.rightGate){
            if(this.rightGate=="next"){
                rightGate.style.backgroundColor = "rgb(140, 0, 255)";
            }
            else if(this.rightGate=="back"){
                rightGate.style.backgroundColor = "#2d2d2d";
            }
            else{
                rightGate.style.backgroundColor = "#5c5c5c";
            }
        }
        else {
            rightGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }


        if (this.bottomGate){
            if(this.bottomGate=="next"){
                bottomGate.style.backgroundColor = "rgb(140, 0, 255)";
            }
            else if(this.bottomGate=="back"){
                bottomGate.style.backgroundColor = "#2d2d2d";
            }
            else{
                bottomGate.style.backgroundColor = "#5c5c5c";
            }
        }
        else {
            bottomGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }


        if (this.leftGate){
            if(this.leftGate=="next"){
                leftGate.style.backgroundColor = "rgb(140, 0, 255)";
            }
            else if(this.leftGate=="back"){
                leftGate.style.backgroundColor = "#2d2d2d";
            }
            else{
                leftGate.style.backgroundColor = "#5c5c5c";
            }
        }
        else {
            leftGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
        }


        
        
        }
}

class Level {
    constructor(level) {
        this.adaptedLevel  = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]; 
        this.MapMatrix = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]; 
        this.level = level;
        this.startX;
        this.startY;

        this.i = 1;
        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
                this.MapMatrix[y][x] = document.querySelector(".map-room:nth-child("+this.i+")");
                this.i++
                if (this.level[y][x] != 0){


                    this.contains = "nothing";   //chest/enemy (later)

                    this.up = (y != 0 && this.level[y-1][x] != 0) ? true : false
                    this.right = (x != 9 && this.level[y][x+1] != 0) ? true : false
                    this.down = (y != 9 && this.level[y+1][x] != 0) ? true : false
                    this.left = (x != 0 && this.level[y][x-1] != 0) ? true : false
                    if (this.level[y][x] == 3){
                        this.type = "exit";
                        if (y == 0) this.up = "next"
                        else if(x == 9) this.right = "next"
                        else if(y == 9) this.down = "next"
                        else if(x == 0) this.left = "next"
                    }
                    else if(this.level[y][x] == 2){
                        this.type = "entrance";
                        if (y == 0) this.up = "back"
                        else if(x == 9) this.right = "back"
                        else if(y == 9) this.down = "back"
                        else if(x == 0) this.left = "back"
                    }
                    else if(this.level[y][x] == 1){
                        this.type = "ordinary";
                    }
                    else {
                        this.type = "error";
                    }

                    this.adaptedLevel[y][x] = new Room(this.up,this.right,this.down,this.left,
                        this.contains, this.type);
                }

                if (level[y][x] == 2) {
                this.startX = x
                this.startY = y
                }
                
            }
        }
        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
                this.MapMatrix[y][x].style.border = "1px solid black";
                switch(this.level[y][x]){
                    case 0:
                        this.MapMatrix[y][x].style.backgroundColor = "rgb(238, 223, 166)";
                        break;
                    case 1:
                        this.MapMatrix[y][x].style.backgroundColor = "gray";
                        break;
                    case 2:
                        this.MapMatrix[y][x].style.backgroundColor = "green";
                        this.MapMatrix[y][x].style.border = "5px solid red";
                        break;
                    case 3:
                        this.MapMatrix[y][x].style.backgroundColor = "rgb(140, 0, 255)";
                        break;
                
                }
            }
        }



    }
    nowMap(){
        this.MapMatrix[nowY][nowX].style.borderColor = "red";
        this.MapMatrix[nowY][nowX].style.border = "5px solid red";

        try {this.MapMatrix[nowY-1][nowX].style.border = "1px solid black";}
        catch{}
        try {this.MapMatrix[nowY+1][nowX].style.border = "1px solid black";}
        catch{}
        try {this.MapMatrix[nowY][nowX-1].style.border = "1px solid black";}
        catch{}
        try {this.MapMatrix[nowY][nowX+1].style.border = "1px solid black";}
        catch{}
    }
}

// // -------------------------------------
let url = "http://127.0.0.1:5000/users"


// async function Post(endpoint, data){
// try{
//     let response = await fetch(url + endpoint, {
//         method:"POST",
//         body:JSON.stringify(data),
//         headers: { "Accept": "application/json", "Content-Type": "application/json", }
//     });
//     if (response.status !== 200) {  
//       console.log('Looks like there was a problem. Status Code: ' +  
//         response.status);  
//     }
//       return;
//   }
//   catch(e){
//     console.log(e)
//   }
// }




// function NewLevel(entranceSide){

//     let newLevel = Generation(entranceSide);

//     endpoint = "/new_level" + "/" + user_name
//     Post(endpoint, newLevel);
//     levelNow = new Level(newLevel);         
//     nowY = levelNow.startY
//     nowX = levelNow.startX
//     levelNow.adaptedLevel[nowY][nowX].showRoom()
//     levelNow.nowMap();
// }


// -------------------------------------

//db connect



let endpoint;
let user_name = "ptah_9"

let levelNow;
let nowY;
let nowX;


endpoint = "/users_this_life" + "/" + user_name
Connect(endpoint, "GET").then(function(response) {
    let resp = response
    scoreSpan.textContent = resp[0]["score"];         
})

endpoint = "/users_this_level" + "/" + user_name
Connect(endpoint, "GET").then(function(response) {
    let resp = response[0]
    let level = JSON.parse(resp["now_level"]);
    levelNow = new Level(level);         
    nowY = levelNow.startY
    nowX = levelNow.startX
    levelNow.adaptedLevel[nowY][nowX].showRoom()

})


// ------------------------------------------------------------------

body.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    if (event.code == "ArrowUp") {
        if(levelNow.level[nowY][nowX] != 3 || nowY != 0){
            if (nowY !=0 && levelNow.level[nowY-1][nowX] && mapClosed) {
                nowY-=1;
             }
        }
        else {
            NewLevel(3)
        }

        
    }
    if (event.code == "ArrowRight") {
        if(levelNow.level[nowY][nowX] != 3 || nowX != 9){
            if (nowX != 9 && levelNow.level[nowY][nowX+1] && mapClosed) {
                nowX+=1;
                levelNow.nowMap();
            }
        }
        else if(nowX==9) {
            NewLevel(2)
        }

    }
    if (event.code == "ArrowDown") {
        if(levelNow.level[nowY][nowX] != 3 || nowY != 9){
            if (nowY !=9 && levelNow.level[nowY+1][nowX] && mapClosed) {
                nowY+=1;
                levelNow.nowMap();
            }
        }
        else if(nowY==9) {
            NewLevel(4)
        }

    }
    if (event.code == "ArrowLeft") {
        if(levelNow.level[nowY][nowX] != 3 || nowX != 0){
            if (nowX != 0 && levelNow.level[nowY][nowX-1] && mapClosed) {
                nowX-=1;
                levelNow.nowMap();
            }
        }
        else if(nowX==0) {
            NewLevel(1)
        }

    }

    levelNow.adaptedLevel[nowY][nowX].showRoom()
});

upButton.addEventListener("click", function() {
    if(levelNow.level[nowY][nowX] != 3){
    if (nowY !=0 && levelNow.level[nowY-1][nowX] && mapClosed) {
        nowY-=1;
        levelNow.nowMap();
    }}
    else {
        NewLevel(3)
    }

    levelNow.adaptedLevel[nowY][nowX].showRoom()
})
rightButton.addEventListener("click", function() {
    if(levelNow.level[nowY][nowX] != 3){
    if (nowX != 9 && levelNow.level[nowY][nowX+1] && mapClosed) {
        nowX+=1;
        levelNow.nowMap();
    }}
    else {
        NewLevel(2)
    }

    levelNow.adaptedLevel[nowY][nowX].showRoom()
})
bottomButton.addEventListener("click", function() {
    if(levelNow.level[nowY][nowX] != 3){
    if (nowY !=9 && levelNow.level[nowY+1][nowX] && mapClosed) {
        nowY+=1;
        levelNow.nowMap();
    }}
    else {
        NewLevel(4)
    }

    levelNow.adaptedLevel[nowY][nowX].showRoom()
})
leftButton.addEventListener("click", function() {
    if(levelNow.level[nowY][nowX] != 3){
        if (nowX != 0 && levelNow.level[nowY][nowX-1] && mapClosed) {
            nowX-=1;
            levelNow.nowMap();
        }}
    else {
        NewLevel(1)
    }
    
    levelNow.adaptedLevel[nowY][nowX].showRoom()
})



// btn_click.addEventListener('click',() => {
//     let x = Math.floor(Math.random()*(256));
//     let y = Math.floor(Math.random()*(256));
//     let z = Math.floor(Math.random()*(256));
//     title.style.color = `rgba(${x},${y},${z}, .7)`;
// })

weaponBtn.addEventListener("click", function(){
    if (health > 0) {
        health -= 100
    }
    healthScale.style.width = (100 - (health / max_health * 100)) + "%"
})

artifactsBtn.addEventListener("click", function(){
    if (health < max_health) {
        health += 100
    }
    healthScale.style.width = (100 - (health / max_health * 100)) + "%"
})
exitMapBtn.addEventListener("click", function(){
    mapArea.style.display = "none";
    mapClosed = true;

})

mapBtn.addEventListener("click", function(){
    mapArea.style.display = "block"
    mapClosed = false;
})

exitWeaponBtn.addEventListener("click", function(){
    weaponArea.style.display = "none";
    weaponClosed = true;
})

weaponBtn.addEventListener("click", function(){
    weaponArea.style.display = "block"
    weaponClosed = false;
})

class weaponItem {
    constructor(name, shortDesc, description, power) {
        this.name = name;
        this.shortDesc = shortDesc;
        this.description = description;
        this.power = power;
    }
}

let sword = new weaponItem("Purple Sword", 
                        "It's your first sword", 
                        "An ordinary, cool sword that you get at the beginning of the game and use for a very short time, so I don’t see the point in writing a long and beautiful description for this sword, since you probably won’t read it.",
                        30);

let magic = new weaponItem("Purple Magic", 
                        "Magic doesn't exist", 
                        "Many people say that magic does not exist, this is of course not true, magic still exists, but using this spell you are unlikely to feel it (yes, it is so weak), but what did you want, this is the initial spell.",
                        30);

let shield = new weaponItem("Purple Shield", 
                        "Doesn't protect 99.9%", 
                        "No, well, what did you want, if a stone is thrown at you, maybe you can fight it off, but you can’t count on protection from the hand of even the most fragile skeleton (not a shield, but shit). But, again, it will do for the first time, and then you will find a new one.",
                        10);

let ring = new weaponItem("Purple Ring", 
                        "No, not a wedding", 
                        "Yes, it got stuck on my finger. The ring is thin, without a stone, and only adds mood and a little style. It’s better not to hit it with your hands, it will simply crumble or crack (what it consists of is not clear). This kind of jewelry is not for me, I need to find something new.", 
                        3);


let weaponSelected = swordBtn;
weaponName.textContent = sword.name;
weaponShortDesc.textContent = sword.shortDesc;
weaponDesc.textContent = sword.description;
swordBtn.classList.add('weapon-btn-active');

swordBtn.addEventListener("click", function(){
    weaponName.textContent = sword.name;
    weaponShortDesc.textContent = sword.shortDesc;
    weaponDesc.textContent = sword.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    swordBtn.classList.add('weapon-btn-active');
    weaponSelected = swordBtn;

})

magicBtn.addEventListener("click", function(){
    weaponName.textContent = magic.name;
    weaponShortDesc.textContent = magic.shortDesc;
    weaponDesc.textContent = magic.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    magicBtn.classList.add('weapon-btn-active');
    weaponSelected = magicBtn;
})

shieldBtn.addEventListener("click", function(){
    weaponName.textContent = shield.name;
    weaponShortDesc.textContent = shield.shortDesc;
    weaponDesc.textContent = shield.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    shieldBtn.classList.add('weapon-btn-active');
    weaponSelected = shieldBtn;
})

ringBtn.addEventListener("click", function(){
    weaponName.textContent = ring.name;
    weaponShortDesc.textContent = ring.shortDesc;
    weaponDesc.textContent = ring.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    ringBtn.classList.add('weapon-btn-active');
    weaponSelected = ringBtn;
})









// let score;

// console.log(data)


// scoreSpan.textContent = score;

// ---------------------------------------------------------

// import { retrieveLaunchParams } from '@tma.js/sdk';
// const { initDataRaw } = retrieveLaunchParams();

// fetch('https://example.com/api', {
//   method: 'POST',
//   headers: {
//     Authorization: `tma ${initDataRaw}`
//   },
// });


// ------------



// -------------------------------------
// let url = "http://127.0.0.1:5000/users"


// async function Post(endpoint, data){
// try{
//     let response = await fetch(url + endpoint, {
//         method:"POST",
//         body:JSON.stringify(data),
//         headers:{
//             "Content-Type": "application/json"  
//           }
//     });
//     if (response.status !== 200) {  
//       console.log('Looks like there was a problem. Status Code: ' +  
//         response.status);  
//     }
//       return;
//   }
//   catch(e){
//     console.log(e)
//   }
// }



// function NewLevel(entranceSide){

//     let newLevel = Generation(entranceSide);

//     endpoint = "/new_level" + "/" + user_name
//     Post(endpoint, newLevel)
//     levelNow = new Level(newLevel);         
//     nowY = levelNow.startY
//     nowX = levelNow.startX
//     levelNow.adaptedLevel[nowY][nowX].showRoom()
//     levelNow.nowMap();
// }


// // -------------------------------------

// //db connect



// url = "http://127.0.0.1:5000/users"
// let endpoint;
// let user_name = "ptah_9"

// let levelNow;
// let nowY;
// let nowX;


// endpoint = "/users_this_life" + "/" + user_name
// Connect(eчndpoint).then(function(response) {
//     let resp = response
//     scoreSpan.textContent = resp[6];         
// })   

// endpoint = "/users_this_level" + "/" + user_name
// Connect(endpoint).then(function(response) {
//     let resp = response[1]  
//     let level = JSON.parse(resp);
//     levelNow = new Level(level);         
//     nowY = levelNow.startY
//     nowX = levelNow.startX
//     levelNow.adaptedLevel[nowY][nowX].showRoom()

// })





// Connect(endpoint).then(function(response) {
//     let resp = response;
//     console.log(response)
// })








// async function Post(endpoint, data){
//     try{
//         let response = await fetch(url + endpoint, {
//             method:"POST",
//             body:JSON.stringify(data),
//             headers: { "Accept": "application/json", "Content-Type": "application/json", "Access-Control-Allow-Origin" : "*" }
//         });
//         if (response.status !== 200) {  
//           console.log('Looks like there was a problem. Status Code: ' +  
//             response.status);  
//         }
//           return;
//       }
//       catch(e){
//         console.log(e)
//       }
//     }
    

function NewLevel(entranceSide){

    // let newLevel = Generation(entranceSide);
    let newLevel = 100;

    endpoint = "/lol"
    Connec(endpoint);
}

Connect("/lol", "POST", {"lol":"lul"}).then( function(l) {
    console.log(l)
})