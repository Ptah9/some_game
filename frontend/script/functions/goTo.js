const staminaCounter = document.querySelector(".now-stamina"),
    healthScale = document.querySelector('.health-scale');


import showRoom from "./showRoom.js";
import NewLevel from "./newLevel.js";

import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";

async function minusStamina(){
    let stamina = await Get("stamina") - 1;
    Put("stamina", stamina);
    staminaCounter.textContent = stamina;
    healthScale.style.width = (100 - (stamina / await Get("maxStamina") * 100)) + "%";
}
async function plusStamina(){
    let stamina = await Get("stamina") - 10;
    Put("stamina", stamina);
    staminaCounter.textContent = stamina;
    healthScale.style.width = (100 - (stamina / await Get("maxStamina") * 100)) + "%";
}
async function goTo(direction, NowMap){
    if(await Get("stamina") <= 0) return
if (localStorage.backpackClosed == "true" && 
    localStorage.mapClosed == "true" && 
    localStorage.userClosed == "true" && 
    localStorage.leaderboardClosed == "true"){
            
        let levelNow = await Get("levelNow");
        let nowX = Number(await Get("nowX"));
        let nowY = Number(await Get("nowY"));
        switch (direction){
            case "up":
                if(levelNow.level[nowY][nowX] != 3 || nowY != 0){
                    if (nowY !=0 && levelNow.level[nowY-1][nowX]){
                        minusStamina()
                        nowY-=1;
                        Put('nowY', nowY);
                        NowMap.nowMap(nowX, nowY);
                        showRoom(levelNow.adaptedLevel[nowY][nowX]);
                        }
                }
                else if(nowY==0){
                    NewLevel(3);
                    plusStamina()
                }
            break;

            case "right":
                if(levelNow.level[nowY][nowX] != 3 || nowX != 9){
                    if (nowX != 9 && levelNow.level[nowY][nowX+1]) {
                        minusStamina()
                        nowX+=1;
                        Put('nowX', nowX);
                        NowMap.nowMap(nowX, nowY);
                        showRoom(levelNow.adaptedLevel[nowY][nowX]);
                    }
                }
                else if(nowX==9) {
                    NewLevel(2);
                    plusStamina()
                }
            break;
            
            case "down":
                if(levelNow.level[nowY][nowX] != 3 || nowY != 9){
                    if (nowY !=9 && levelNow.level[nowY+1][nowX]) {
                        minusStamina()
                        nowY+=1;
                        Put('nowY', nowY);
                        NowMap.nowMap(nowX, nowY);
                        showRoom(levelNow.adaptedLevel[nowY][nowX]);

                    }
                }
                else if(nowY==9) {
                    NewLevel(4);
                    plusStamina()
                }
            break;

            case "left":
                if(levelNow.level[nowY][nowX] != 3 || nowX != 0){
                    if (nowX != 0 && levelNow.level[nowY][nowX-1]) {
                        minusStamina()
                        nowX-=1;
                        Put('nowX', nowX);
                        NowMap.nowMap(nowX, nowY);
                        showRoom(levelNow.adaptedLevel[nowY][nowX]);
                    }

                }
                else if(nowX==0) {
                    NewLevel(1);
                    plusStamina()
                }
            break;
        }
    }
}


export default goTo;