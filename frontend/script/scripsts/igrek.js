const igrek = document.querySelector('.igrek-div');
import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";


igrek.addEventListener("click", async function() {
    let level = await Get("levelNow");
    let nowX = await Get("nowX");
    let nowY = await Get("nowY");
    if (level.adaptedLevel[nowY][nowX].contains == "igrek"){
        level.adaptedLevel[nowY][nowX].contains = "nothing";
        await Put("levelNow", level);
        await Put("igreks", await Get("igreks") + 1);
        igrek.style.display = "none";
    }
    else{
        console.log("oops, i don't now this Igrek, it's fake")
    }
})
