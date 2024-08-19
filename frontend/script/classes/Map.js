import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";


class Map{
    constructor(levelForMap, openedLevel) {
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

        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
                this.matrix[y][x] = document.querySelector(".map-room:nth-child("+roomNum+")");
                roomNum++;

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
    }
    
    async nowMap(nowX, nowY){
        this.matrix[nowY][nowX].insertAdjacentHTML("afterbegin", `<img src="styles/imgs/chel.png">`);
        let levelNow = await Get("levelNow");
        let openedLevel = await Get("openedLevel");
        if (openedLevel[nowY][nowX] == 0){

            if (levelNow.level[nowY][nowX] == 1){
                this.matrix[nowY][nowX].style.backgroundColor = "gray";
                
                openedLevel[nowY][nowX] = 1;
                await Put('openedLevel', openedLevel);
            } 
            else if(levelNow.level[nowY][nowX] == 3){
                this.matrix[nowY][nowX].style.backgroundColor = "rgb(140, 0, 255)";
    
                openedLevel[nowY][nowX] = 3;
                await Put('openedLevel', openedLevel);
            }
            let openedRooms = await Get("openedRooms");
            let newOpenedRooms = openedRooms + 1;
            await Put("openedRooms", newOpenedRooms);
            document.querySelector('#opened-rooms').textContent = newOpenedRooms;

            let score = await Get("score");
            let newScore = Number(score) + 1;
            await Put("score", newScore);
        }

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