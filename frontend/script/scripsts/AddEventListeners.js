const healthScale = document.querySelector('.health-scale'),
mapBtn = document.querySelector('#map-btn'),
mapArea = document.querySelector('.map-area'),
exitMapBtn = document.querySelector('.exit-map-btn'),
exitBackpackBtn = document.querySelector('.exit-backpack-btn'),
backpackBtn = document.querySelector('#backpack-btn'),
inventoryArea = document.querySelector('.backpack-area'),
// weaponBtn = document.querySelector('#weapon-btn'),
// artifactsBtn = document.querySelector('#artifacts-btn'),
leaderboardBtn = document.querySelector('#leaderboard-btn'),
exitLeaderboardBtn = document.querySelector(".exit-leaderboard-btn"),
leaderboardArea = document.querySelector(".leaderboard-area");

// artifactsBtn.addEventListener("click", function(){
//         weaponArea.style.display = "none";
//         artifactsArea.style.display = "block";
// })
// weaponBtn.addEventListener("click", function(){
//         weaponArea.style.display = "block";
//         artifactsArea.style.display = "none";
// })



mapBtn.addEventListener("click", function(){
    mapArea.style.display = "block";
    localStorage.mapClosed = false;
    document.querySelector(".igreks-green").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-yellow").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-blue").style.color = "rgba(0, 0, 0, 0)";
});
exitMapBtn.addEventListener("click", function(){
    mapArea.style.display = "none";
    localStorage.mapClosed = true;
    document.querySelector(".igreks-green").style.color = "rgb(151, 217, 49)";
    document.querySelector(".igreks-yellow").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks-blue").style.color = "rgb(47, 80, 123)";
});

backpackBtn.addEventListener("click", function(){
    inventoryArea.style.display = "block"
    localStorage.backpackClosed = false;
    document.querySelector(".igreks-green").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-yellow").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-blue").style.color = "rgba(0, 0, 0, 0)";
    
});
exitBackpackBtn.addEventListener("click", function(){
    inventoryArea.style.display = "none";
    localStorage.backpackClosed = true;

    document.querySelector(".igreks-green").style.color = "rgb(151, 217, 49)";
    document.querySelector(".igreks-yellow").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks-blue").style.color = "rgb(47, 80, 123)";

});


leaderboardBtn.addEventListener("click", function(){
    leaderboardArea.style.display = "block";
    localStorage.leaderboardClosed = false;
    document.querySelector(".igreks-green").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-yellow").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-blue").style.color = "rgba(0, 0, 0, 0)";
});

exitLeaderboardBtn.addEventListener("click", function(){
    leaderboardArea.style.display = "none";
    localStorage.leaderboardClosed = true;
    document.querySelector(".igreks-green").style.color = "rgb(151, 217, 49)";
    document.querySelector(".igreks-yellow").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks-blue").style.color = "rgb(47, 80, 123)";
});

