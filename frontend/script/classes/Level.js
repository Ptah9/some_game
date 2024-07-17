import Room from "./Room.js";

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

let floors = [
    "floor1", "floor2", "floor3", "floor4", "floor5"
]

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
        this.level = level;
        this.startX;
        this.startY;
        this.rooms = 0;
        
        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
                if (this.level[y][x] != 0){
                    this.rooms +=1
                    let contains = "nothing";   //chest/enemy (later)
                    let type;
                    let floor = floors[getRandomArbitrary(0,5)]     //TODO: сделать авто-определение длины

                    let up = (y != 0 && this.level[y-1][x] != 0) ? true : false;
                    let right = (x != 9 && this.level[y][x+1] != 0) ? true : false;
                    let down = (y != 9 && this.level[y+1][x] != 0) ? true : false;
                    let left = (x != 0 && this.level[y][x-1] != 0) ? true : false;

                    if (this.level[y][x] == 3){
                        type = "exit";
                        if (y == 0) up = "next";
                        else if(x == 9) right = "next";
                        else if(y == 9) down = "next";
                        else if(x == 0) left = "next";
                    }
                    else if(this.level[y][x] == 2){
                        type = "entrance";
                        if (y == 0) up = "back";
                        else if(x == 9) right = "back";
                        else if(y == 9) down = "back";
                        else if(x == 0) left = "back";
                    }
                    else if(this.level[y][x] == 1)type = "ordinary";
                    else type = "error";

                    this.adaptedLevel[y][x] = new Room(up, right, down, left, contains, type, floor);
                }

                if (level[y][x] == 2){
                    this.startX = x;
                    this.startY = y;
                }
            }
        }
    }
}

export default Level;