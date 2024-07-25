import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";


class Map{
    constructor(levelForMap) {
        this.matrix = [
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
        let roomNum = 1;
        Get("openedLevel").then((openedLevel)=>{
            for (let y = 0; y < 10; y++){
                for (let x = 0; x < 10; x++){
                    console.log("lol")
                    this.matrix[y][x] = document.querySelector(".map-room:nth-child("+roomNum+")");
                    roomNum++
    
                    this.matrix[y][x].style.border = "1px solid black";
                    try{this.matrix[y][x].removeChild(this.matrix[y][x].childNodes[0])}
                    catch{}
                    switch (openedLevel[y][x]){
                        case 0:
                            this.matrix[y][x].style.backgroundColor = "rgb(238, 223, 166)";
                            break;
    
                        case 1:
                            this.matrix[y][x].style.backgroundColor = "gray";
                            break;
    
                        case 3:
                            this.matrix[y][x].style.backgroundColor = "rgb(140, 0, 255)";
                            break;
                    }
    
                    if (levelForMap.level[y][x] == 2){
                            this.matrix[y][x].style.backgroundColor = "green";
    
                    }
                }
            }
        })

    }
    
    nowMap(nowX, nowY){
        // this.matrix[nowY][nowX].style.borderColor = "red";
        this.matrix[nowY][nowX].insertAdjacentHTML("afterbegin", `<img src="styles/imgs/chel.png">`)
        // this.matrix[nowY][nowX].style.border = "3px solid white"
        Get('levelNow').then((levelNow)=>{
            Get("openedLevel").then((openedLevel)=>{
                if (levelNow.level[nowY][nowX] == 1 && openedLevel[nowY][nowX] == 0){
                    this.matrix[nowY][nowX].style.backgroundColor = "gray";
                    
                    openedLevel[nowY][nowX] = 1;
                    Put('openedLevel', JSON.stringify(openedLevel));

                    Get("openedRooms").then((openedRooms)=>{
                        let newOpenedRooms = Number(openedRooms) + 1
                        Put("openedRooms", newOpenedRooms)
                        document.querySelector('.score').textContent = score
                    })
                    
                    Get("score").then((score)=>{
                        let newScore = Number(score) + 1
                        Put("score", newScore)
                        document.querySelector('.score').textContent = score
                    })
                } 
                else if(levelNow.level[nowY][nowX] == 3 && openedLevel[nowY][nowX] == 0){
                    this.matrix[nowY][nowX].style.backgroundColor = "rgb(140, 0, 255)";
                    openedLevel[nowY][nowX] = 3;
                    Put('openedLevel', JSON.stringify(openedLevel));

                    Get("openedRooms").then((openedRooms)=>{
                        let newOpenedRooms = Number(openedRooms) + 1
                        Put("openedRooms", newOpenedRooms)
                        document.querySelector('.score').textContent = score
                    })
        
                    Get("score").then((score)=>{
                        let newScore = Number(score) + 1
                        Put("score", newScore)
                        document.querySelector('.score').textContent = score
                    })
                }
            })
        })

        
        try {this.matrix[nowY-1][nowX].removeChild(this.matrix[nowY-1][nowX].childNodes[0])}
        catch{}
        try {this.matrix[nowY+1][nowX].removeChild(this.matrix[nowY+1][nowX].childNodes[0])}
        catch{}
        try {this.matrix[nowY][nowX-1].removeChild(this.matrix[nowY][nowX-1].childNodes[0])}
        catch{}
        try {this.matrix[nowY][nowX+1].removeChild(this.matrix[nowY][nowX+1].childNodes[0])}
        catch{}
    }
}

export default Map;