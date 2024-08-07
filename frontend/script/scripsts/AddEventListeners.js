const healthScale = document.querySelector('.health-scale'),
mapBtn = document.querySelector('#map-btn'),
mapArea = document.querySelector('.map-area'),
exitMapBtn = document.querySelector('.exit-map-btn'),
exitBackpackBtn = document.querySelector('.exit-backpack-btn'),
backpackBtn = document.querySelector('#backpack-btn'),
inventoryArea = document.querySelector('.backpack-area'),
weaponBtn = document.querySelector('#weapon-btn'),
artifactsBtn = document.querySelector('#artifacts-btn'),
artifactsArea = document.querySelector('.artifacts-area'),
weaponArea = document.querySelector('.weapon-area'),
leaderboardBtn = document.querySelector('#leaderboard-btn'),
exitLeaderboardBtn = document.querySelector(".exit-leaderboard-btn"),
leaderboardArea = document.querySelector(".leaderboard-area"),
scoreTitle = document.querySelectorAll(".score-title");

artifactsBtn.addEventListener("click", function(){
        weaponArea.style.display = "none";
        artifactsArea.style.display = "block";
})
weaponBtn.addEventListener("click", function(){
        weaponArea.style.display = "block";
        artifactsArea.style.display = "none";
})


mapBtn.addEventListener("click", function(){
    mapArea.style.display = "block";
    localStorage.mapClosed = false;
    scoreTitle[0].style.color = "rgba(0, 0, 0, 0)";
    scoreTitle[1].style.color = "rgba(0, 0, 0, 0)";
});
exitMapBtn.addEventListener("click", function(){
    mapArea.style.display = "none";
    localStorage.mapClosed = true;
    scoreTitle[0].style.color = "var(--main-purple)";
    scoreTitle[1].style.color = "var(--main-purple)";
});

backpackBtn.addEventListener("click", function(){
    inventoryArea.style.display = "block"
    localStorage.backpackClosed = false;
    scoreTitle[0].style.color = "rgba(0, 0, 0, 0)";
    scoreTitle[1].style.color = "rgba(0, 0, 0, 0)";
    
})
exitBackpackBtn.addEventListener("click", function(){
    inventoryArea.style.display = "none";
    localStorage.backpackClosed = true;

    scoreTitle[0].style.color = "var(--main-purple)";
    scoreTitle[1].style.color = "var(--main-purple)";

});


leaderboardBtn.addEventListener("click", function(){
    leaderboardArea.style.display = "block";
    localStorage.leaderboardClosed = false;
    scoreTitle[0].style.color = "rgba(0, 0, 0, 0)";
    scoreTitle[1].style.color = "rgba(0, 0, 0, 0)";
});

exitLeaderboardBtn.addEventListener("click", function(){
    leaderboardArea.style.display = "none";
    localStorage.leaderboardClosed = true;
    scoreTitle[0].style.color = "var(--main-purple)";
    scoreTitle[1].style.color = "var(--main-purple)";
});

