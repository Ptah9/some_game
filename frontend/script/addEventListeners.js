mapBtn = document.querySelector('#map-btn'),
artifactsBtn = document.querySelector('#artifacts-btn'),
weaponBtn = document.querySelector('#weapon-btn'),



function AddAllEventListeners(){
        
    body.addEventListener("keydown", function (event) {
        if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
            event.code != "ArrowUp" && event.code != "ArrowDown") return;

        if (event.code == "ArrowUp") {
            if (nowY !=0 && levelNow.level[nowY-1][nowX] && mapClosed) {
                nowY-=1;
                levelNow.nowMap();
            }
            
        }
        if (event.code == "ArrowRight") {
            if (nowX != 9 && levelNow.level[nowY][nowX+1] && mapClosed) {
                nowX+=1;
                levelNow.nowMap();
            }
        }
        if (event.code == "ArrowDown") {
            if (nowY !=9 && levelNow.level[nowY+1][nowX] && mapClosed) {
                nowY+=1;
                levelNow.nowMap();
            }
        }
        if (event.code == "ArrowLeft") {
            if (nowX != 0 && levelNow.level[nowY][nowX-1] && mapClosed) {
                nowX-=1;
                levelNow.nowMap();
            }
        }

        levelNow.adaptedLevel[nowY][nowX].showRoom()
    });

    upButton.addEventListener("click", function() {
        if (nowY !=0 && levelNow.level[nowY-1][nowX] && mapClosed) {
            nowY-=1;
            levelNow.nowMap();
        }
        levelNow.adaptedLevel[nowY][nowX].showRoom()
    })
    rightButton.addEventListener("click", function() {
        if (nowX != 9 && levelNow.level[nowY][nowX+1] && mapClosed) {
            nowX+=1;
            levelNow.nowMap();
        }
        levelNow.adaptedLevel[nowY][nowX].showRoom()
    })
    bottomButton.addEventListener("click", function() {
        if (nowY !=9 && levelNow.level[nowY+1][nowX] && mapClosed) {
            nowY+=1;
            levelNow.nowMap();
        }
        levelNow.adaptedLevel[nowY][nowX].showRoom()
    })
    leftButton.addEventListener("click", function() {
        if (nowX != 0 && levelNow.level[nowY][nowX-1] && mapClosed) {
            nowX-=1;
            levelNow.nowMap();
        }
        levelNow.adaptedLevel[nowY][nowX].showRoom()
    })




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
    exitMapBtn.addEventListener("click", function(){
        mapArea.style.display = "none";
        mapClosed = true;

    })

    mapBtn.addEventListener("click", function(){
        mapArea.style.display = "block"
        mapClosed = false;
    })

    exitWeaponBtn.addEventListener("click", function(){
        weaponArea.style.display = "none";
        weaponClosed = true;
    })

    weaponBtn.addEventListener("click", function(){
        weaponArea.style.display = "block"
        weaponClosed = false;
    })
}


export default AddAllEventListeners;