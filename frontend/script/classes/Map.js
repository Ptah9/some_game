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
        // Get("openedLevel").then(console.log)
        let openedLevel = JSON.parse(localStorage.getItem("openedLevel"))
        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
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

    }
    
    nowMap(nowX, nowY){
        // this.matrix[nowY][nowX].style.borderColor = "red";
        this.matrix[nowY][nowX].insertAdjacentHTML("afterbegin", `<img src="styles/imgs/chel.png">`)
        // this.matrix[nowY][nowX].style.border = "3px solid white"
        let levelNow = JSON.parse(localStorage.getItem("levelNow"));
        let openedLevel = JSON.parse(localStorage.getItem("openedLevel"))

        if (openedLevel[nowY][nowX] == 0){

            if (levelNow.level[nowY][nowX] == 1){
                this.matrix[nowY][nowX].style.backgroundColor = "gray";
                
                openedLevel[nowY][nowX] = 1;
                localStorage.setItem('openedLevel', JSON.stringify(openedLevel));
            } 
            else if(levelNow.level[nowY][nowX] == 3){
                this.matrix[nowY][nowX].style.backgroundColor = "rgb(140, 0, 255)";
    
                openedLevel[nowY][nowX] = 3;
                localStorage.setItem('openedLevel', JSON.stringify(openedLevel));
            }
            let openedRooms = localStorage.getItem("openedRooms")
            let newOpenedRooms = Number(openedRooms) + 1
            localStorage.setItem("openedRooms", newOpenedRooms)
            document.querySelector('#opened-rooms').textContent = newOpenedRooms

            let score = localStorage.getItem("score")
            let newScore = Number(score) + 1
            document.querySelector('.score').textContent = newScore
            localStorage.setItem("score", newScore)
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