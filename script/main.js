const healthScale = document.querySelector('.health-scale'),
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
    body = document.querySelector('#body');

let max_health = 1000,
    health = 1000;

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
        this.adaptatedLevel = [
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

        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
    
                if (this.level[y][x] != 0){


                    this.contains = "nothing";   //chest/enemy (later)


                    this.adaptatedLevel[y][x] = new Room(
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




    }
}
let levelExample = [
    [0, 0, 0, 0, 0, 0, 0, 3, 1, 1],
    [3, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0]
];

levelNow = new Level(levelExample);
let nowY = levelNow.startY
let nowX = levelNow.startX
levelNow.adaptatedLevel[nowY][nowX].showRoom()
// ------------------------------------------------------------------

body.addEventListener("keydown", function (event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    if (event.code == "ArrowUp") {
        if (nowY !=0 && levelNow.level[nowY-1][nowX]) nowY-=1;
    }
    if (event.code == "ArrowRight") {
        if (nowX != 9 && levelNow.level[nowY][nowX+1]) nowX+=1;
    }
    if (event.code == "ArrowDown") {
        if (nowY !=9 && levelNow.level[nowY+1][nowX]) nowY+=1;
    }
    if (event.code == "ArrowLeft") {
        if (nowX != 0 && levelNow.level[nowY][nowX-1]) nowX-=1;
    }

    levelNow.adaptatedLevel[nowY][nowX].showRoom()
});

upButton.addEventListener("click", function() {
    if (nowY !=0 && levelNow.level[nowY-1][nowX]) nowY-=1;
    levelNow.adaptatedLevel[nowY][nowX].showRoom()
})

rightButton.addEventListener("click", function() {
    if (nowX != 9 && levelNow.level[nowY][nowX+1]) nowX+=1;
    levelNow.adaptatedLevel[nowY][nowX].showRoom()
})

bottomButton.addEventListener("click", function() {
    if (nowY !=9 && levelNow.level[nowY+1][nowX]) nowY+=1;
    levelNow.adaptatedLevel[nowY][nowX].showRoom()
})

leftButton.addEventListener("click", function() {
    if (nowX != 0 && levelNow.level[nowY][nowX-1]) nowX-=1;
    levelNow.adaptatedLevel[nowY][nowX].showRoom()
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

