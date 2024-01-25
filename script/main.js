const healthScale = document.querySelector('.health-scale'),
    artifactsBtn = document.querySelector('#artifacts-btn'),
    weaponBtn = document.querySelector('#weapon-btn'),

    upGate = document.querySelector('#up-gate'),
    rightGate = document.querySelector('#right-gate'),
    bottomGate = document.querySelector('#bottom-gate'),
    leftGate = document.querySelector('#left-gate');


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
      
      
      // Использование:
let room = new Room(true, false, true, false, "nothing", "ordinary");
room.showRoom();
    


let level = [
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0],
    [3, 1, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 0, 1, 2],
    [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function level_adaptation(level){
    for (let y = 0; y < 10; y++){
        for (let x = 0; x < 10; x++){
            if (level[y][x] != 0){
                up = (level[y-1][x] != 0) ? true : false
                right = (level[y][x+1] != 0) ? true : false
                bottom = (level[y+1][x] != 0) ? true : false
                left = (level[y][x-1] != 0) ? true : false
                switch(level[y][x]){
                    case 1:
                        type = //entrance/exit/ordinary
                        break;
                }
            }
        }
    }
}
    
    
    



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


// btn_click.addEventListener('click',() => {
//     let x = Math.floor(Math.random()*(256));
//     let y = Math.floor(Math.random()*(256));
//     let z = Math.floor(Math.random()*(256));
//     title.style.color = `rgba(${x},${y},${z}, .7)`;
// })

