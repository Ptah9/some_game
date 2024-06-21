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
        for (let y = 0; y < 10; y++){
            for (let x = 0; x < 10; x++){
                this.matrix[y][x] = document.querySelector(".map-room:nth-child("+roomNum+")");
                roomNum++

                this.matrix[y][x].style.border = "1px solid black";
                switch(levelForMap.level[y][x]){
                    case 0:
                        this.matrix[y][x].style.backgroundColor = "rgb(238, 223, 166)";
                        break;
                    case 1:
                        this.matrix[y][x].style.backgroundColor = "gray";
                        break;
                    case 2:
                        this.matrix[y][x].style.backgroundColor = "green";
                        break;
                    case 3:
                        this.matrix[y][x].style.backgroundColor = "rgb(140, 0, 255)";
                        break;
                }
            }
        }
    }
    
    nowMap(nowX, nowY){
        this.matrix[nowY][nowX].style.borderColor = "red";
        this.matrix[nowY][nowX].style.border = "5px solid red";

        try {this.matrix[nowY-1][nowX].style.border = "1px solid black";}
        catch{}
        try {this.matrix[nowY+1][nowX].style.border = "1px solid black";}
        catch{}
        try {this.matrix[nowY][nowX-1].style.border = "1px solid black";}
        catch{}
        try {this.matrix[nowY][nowX+1].style.border = "1px solid black";}
        catch{}
    }
}

export default Map;