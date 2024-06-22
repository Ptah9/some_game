import showRoom from "./showRoom.js";
import NewLevel from "./newLevel.js";

function goUp(NowMap){
if (localStorage.mapClosed == "true" && localStorage.weaponClosed == "true"){
    let levelNow = JSON.parse(localStorage.getItem('levelNow'));
    let nowX = JSON.parse(localStorage.getItem('nowX'));
    let nowY = JSON.parse(localStorage.getItem('nowY'));
    if(levelNow.level[nowY][nowX] != 3 || nowY != 0){
        if (nowY !=0 && levelNow.level[nowY-1][nowX]){
            nowY-=1;
            localStorage.setItem('nowY', nowY);
            NowMap.nowMap(nowX, nowY);
         }
         showRoom(levelNow.adaptedLevel[nowY][nowX])
    }
    else if(nowY==0){
        NewLevel(3)
    }
}
}

function goRight(NowMap){
if (localStorage.mapClosed == "true" && localStorage.weaponClosed == "true"){
    let levelNow = JSON.parse(localStorage.getItem('levelNow'));
    let nowX = JSON.parse(localStorage.getItem('nowX'));
    let nowY = JSON.parse(localStorage.getItem('nowY'));
    if(levelNow.level[nowY][nowX] != 3 || nowX != 9){
        if (nowX != 9 && levelNow.level[nowY][nowX+1]) {
            nowX+=1;
            localStorage.setItem('nowX', nowX);
            NowMap.nowMap(nowX, nowY);
        }
        showRoom(levelNow.adaptedLevel[nowY][nowX])
    }
    else if(nowX==9) {
        NewLevel(2)
    }
}
}

function goDown(NowMap){
if (localStorage.mapClosed == "true" && localStorage.weaponClosed == "true"){
    let levelNow = JSON.parse(localStorage.getItem('levelNow'));
    let nowX = JSON.parse(localStorage.getItem('nowX'));
    let nowY = JSON.parse(localStorage.getItem('nowY'));
    if(levelNow.level[nowY][nowX] != 3 || nowY != 9){
        if (nowY !=9 && levelNow.level[nowY+1][nowX]) {
            nowY+=1;
            localStorage.setItem('nowY', nowY);
            NowMap.nowMap(nowX, nowY);
        }
        showRoom(levelNow.adaptedLevel[nowY][nowX])
    }
    else if(nowY==9) {
        NewLevel(4)
    }
}
}

function goLeft(NowMap){
if (localStorage.mapClosed == "true" && localStorage.weaponClosed == "true"){
    let levelNow = JSON.parse(localStorage.getItem('levelNow'));
    let nowX = JSON.parse(localStorage.getItem('nowX'));
    let nowY = JSON.parse(localStorage.getItem('nowY'));
    if(levelNow.level[nowY][nowX] != 3 || nowX != 0){
        if (nowX != 0 && levelNow.level[nowY][nowX-1]) {
            nowX-=1;
            localStorage.setItem('nowX', nowX);
            NowMap.nowMap(nowX, nowY);
        }
        showRoom(levelNow.adaptedLevel[nowY][nowX])
    }
    else if(nowX==0) {
        NewLevel(1)
    }
}
}

export {goUp, goRight, goDown, goLeft};