import showRoom from "./showRoom.js";
import NewLevel from "./newLevel.js";

import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";

function goUp(NowMap){
    
    Get("levelNow").then((levelNow)=>{
        Get("nowX").then((nowX)=>{
            Get("nowY").then((nowY)=>{
                if(levelNow.level[nowY][nowX] != 3 || nowY != 0){
                    if (nowY !=0 && levelNow.level[nowY-1][nowX]){
                        nowY-=1;
                        Put('nowY', nowY);
                        NowMap.nowMap(nowX, nowY);
                     }
                     showRoom(levelNow.adaptedLevel[nowY][nowX])
                }
                else if(nowY==0){
                    NewLevel(3)
                }
            })
        })
    })
}

function goRight(NowMap){

    Get("levelNow").then((levelNow)=>{
        Get("nowX").then((nowX)=>{
            Get("nowY").then((nowY)=>{
                if(levelNow.level[nowY][nowX] != 3 || nowX != 9){
                    if (nowX != 9 && levelNow.level[nowY][nowX+1]) {
                        nowX+=1;
                        Put('nowX', nowX);
                        NowMap.nowMap(nowX, nowY);
                    }
                    showRoom(levelNow.adaptedLevel[nowY][nowX])
                }
                else if(nowX==9) {
                    NewLevel(2)
                }
            })
        })
    })
}

function goDown(NowMap){
    Get("levelNow").then((levelNow)=>{
        Get("nowX").then((nowX)=>{
            Get("nowY").then((nowY)=>{
                if(levelNow.level[nowY][nowX] != 3 || nowY != 9){
                    if (nowY !=9 && levelNow.level[nowY+1][nowX]) {
                        nowY+=1;
                        Put('nowY', nowY);
                        NowMap.nowMap(nowX, nowY);
                    }
                    showRoom(levelNow.adaptedLevel[nowY][nowX])
                }
                else if(nowY==9) {
                    NewLevel(4)
                }
            })
        })
    })
}

function goLeft(NowMap){
    Get("levelNow").then((levelNow)=>{
        Get("nowX").then((nowX)=>{
            Get("nowY").then((nowY)=>{
                if(levelNow.level[nowY][nowX] != 3 || nowX != 0){
                    if (nowX != 0 && levelNow.level[nowY][nowX-1]) {
                        nowX-=1;
                        Put('nowX', nowX);
                        NowMap.nowMap(nowX, nowY);
                    }
                    showRoom(levelNow.adaptedLevel[nowY][nowX])
                }
                else if(nowX==0) {
                    NewLevel(1)
                }
            })
        })
    })
}

export {goUp, goRight, goDown, goLeft};