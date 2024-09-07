const igrek = document.querySelector('.igrek-div');
import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";
function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}

igrek.addEventListener("click", async function() {
    let lucky = await Get("lucky");
    let count =  getRandomArbitrary(lucky/2, lucky+1)
    let level = await Get("levelNow");
    let nowX = await Get("nowX");
    let nowY = await Get("nowY");
    if (level.adaptedLevel[nowY][nowX].contains == "igrek"){
        level.adaptedLevel[nowY][nowX].contains = "nothing";
        await Put("levelNow", level);
        await Put("igreks", await Get("igreks") + count);
        let reward = count/10
        await Put("forInviter", await Get("forInviter") + parseFloat(reward.toFixed(1)));
        igrek.style.display = "none";
        document.querySelector('.igreks').textContent = await Get("igreks");
    }
    else{
        console.log("oops, i don't now these Igreks, they're fake")
    }
})
