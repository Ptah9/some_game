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
    weaponDesc = document.querySelector('.weapon-description p');
 

let max_health = 1000,
    health = 1000;

let mapClosed = true,
    weaponClosed = true;



// function matrix() {
//     let matrix = new Array(10);
//     for (let i = 0; i < 10; i++) {
//         matrix[i] = new Array(10);
// }
// }
// let matrix = new Array(10);
// for (let i = 0; i < 10; i++) {
// matrix[i] = new Array(10);
// }





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
        upGate.style.display =  this.upGate ? "inline" : "none"
        rightGate.style.display =  this.rightGate ? "inline" : "none"
        bottomGate.style.display =  this.bottomGate ? "inline" : "none"
        leftGate.style.display =  this.leftGate ? "inline" : "none"
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


                    this.adaptedLevel[y][x] = new Room(
                        (y-1 != -1 && this.level[y-1][x] != 0) ? true : false,
                        (x+1 != 10 && this.level[y][x+1] != 0) ? true : false,
                        (y+1 != 10 && this.level[y+1][x] != 0) ? true : false,
                        (x-1 != -1 && this.level[y][x-1] != 0) ? true : false,
                        this.contains,
                        (this.level[y][x] == 1) ? "ordinary" : 
                        (this.level[y][x] == 2) ? "entrance" : 
                        (this.level[y][x] == 3) ? "exit" : "error"
                    );
                }

                if (level[y][x] == 2) {
                this.startX = x
                this.startY = y
                }
                
            }
        }
        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
                switch(this.level[y][x]){
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
let levelExample = [
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [3, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 2],
    [0, 1, 1, 1, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

levelNow = new Level(levelExample);
let nowY = levelNow.startY
let nowX = levelNow.startX
levelNow.adaptedLevel[nowY][nowX].showRoom()
// ------------------------------------------------------------------

body.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    if (event.code == "ArrowUp") {
        if (nowY !=0 && levelNow.level[nowY-1][nowX] && mapClosed) {
            nowY-=1;
            levelNow.nowMap();
        }
        
    }
    if (event.code == "ArrowRight") {
        if (nowX != 9 && levelNow.level[nowY][nowX+1] && mapClosed) {
            nowX+=1;
            levelNow.nowMap();
        }
    }
    if (event.code == "ArrowDown") {
        if (nowY !=9 && levelNow.level[nowY+1][nowX] && mapClosed) {
            nowY+=1;
            levelNow.nowMap();
        }
    }
    if (event.code == "ArrowLeft") {
        if (nowX != 0 && levelNow.level[nowY][nowX-1] && mapClosed) {
            nowX-=1;
            levelNow.nowMap();
        }
    }

    levelNow.adaptedLevel[nowY][nowX].showRoom()
});

upButton.addEventListener("click", function() {
    if (nowY !=0 && levelNow.level[nowY-1][nowX] && mapClosed) {
        nowY-=1;
        levelNow.nowMap();
    }
    levelNow.adaptedLevel[nowY][nowX].showRoom()
})
rightButton.addEventListener("click", function() {
    if (nowX != 9 && levelNow.level[nowY][nowX+1] && mapClosed) {
        nowX+=1;
        levelNow.nowMap();
    }
    levelNow.adaptedLevel[nowY][nowX].showRoom()
})
bottomButton.addEventListener("click", function() {
    if (nowY !=9 && levelNow.level[nowY+1][nowX] && mapClosed) {
        nowY+=1;
        levelNow.nowMap();
    }
    levelNow.adaptedLevel[nowY][nowX].showRoom()
})
leftButton.addEventListener("click", function() {
    if (nowX != 0 && levelNow.level[nowY][nowX-1] && mapClosed) {
        nowX-=1;
        levelNow.nowMap();
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


