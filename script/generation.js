let entranceSide = 1;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}



function Generation(entranceSide) {
    let rooms = 0;
    let level = [];
    while(rooms < 10){
        let entranceY = 0;
        let entranceX = 0;
        let nowX = 0;
        let nowY = 0;
        level = [
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
        switch(entranceSide){
            case 1:     //left
                entranceY = getRandomArbitrary(1,9);
                entranceX = 9;
                level[entranceY][entranceX] = 2; //entrance
                nowX = entranceX;
                nowY = entranceY;
                nowX -= 1;



            break;

            case 2:     //right
                entranceY = getRandomArbitrary(1,9);
                entranceX = 0;
                level[entranceY][entranceX] = 2; //entrance
                nowX = entranceX;
                nowY = entranceY;
                nowX += 1;



            break;

            case 3:     //top
                entranceX = getRandomArbitrary(1,9);
                entranceY = 9;
                level[entranceY][entranceX] = 2; //entrance
                nowX = entranceX;
                nowY = entranceY;
                nowY -= 1;


            break;

            case 4:     //bottom
                entranceX = getRandomArbitrary(1,9);
                entranceY = 0;
                level[entranceY][entranceX] = 2; //entrance
                nowX = entranceX;
                nowY = entranceY;
                nowY += 1;


            break;

            
        }
        level[nowY][nowX] = 1;
        let going = 1;

        while(going) {
            let now = getRandomArbitrary(0,4)
            switch(now) {
                case 0:
                    nowX += 1;
                    break;
                case 1:
                    nowX -= 1;
                    break;
                case 2:
                    nowY += 1;
                    break;
                case 3:
                    nowY -= 1;
                    break;
            }
            level[nowY][nowX] = 1;
            if (nowX == 9 || nowY == 9 || nowX == 0 || nowY == 0){
                let exitX = nowX;
                let exitY = nowY;
                level[nowY][nowX] = 3;
                going = 0;
            }
        }

        rooms = 0;

        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
                if (level[y][x] == 1){ 
                    rooms+=1
                }
            }
        }
        
    }
    return level


}













function showLevel(level) {
    let map = "-----------------------\n"
    for (let y = 0; y < 10; y++) {
        map += "| "
        for (let x = 0; x < 10; x++) map += String(level[y][x]) + " "; 
        map+="|\n"
        
    } 
    map+="-----------------------"
    return map;
}


console.log(
    showLevel(
        Generation(entranceSide)
    )
)

export default Generation;