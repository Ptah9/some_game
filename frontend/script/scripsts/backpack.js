const luckyBtn = document.querySelector('#lucky-btn'),
staminaBtn = document.querySelector('#stamina-btn'),
backpackTitle = document.querySelector(".backpack-title"),
backpackDesc = document.querySelector(".backpack-desc"),
yourBackpackP = document.querySelector(".your-backpack-p"),
yourBackpackCount = document.querySelector(".your-backpack-count"),
backpackArea = document.querySelector(".backpack-area"),
buy1P = document.querySelector(".buy-1-p"),
buy10P = document.querySelector(".buy-10-p"),
buy100P = document.querySelector(".buy-100-p"),
buy1Price = document.querySelector(".buy-1-price"),
buy10Price = document.querySelector(".buy-10-price"),
buy100Price = document.querySelector(".buy-100-price"),
buy1 = document.querySelector(".buy-1"),
buy10 = document.querySelector(".buy-10"),
buy100 = document.querySelector(".buy-100"),
backpackImg = document.querySelector(".backpack-img"),
backpackBtn = document.querySelector('#backpack-btn'),
exitBackpackBtn = document.querySelector('.exit-backpack-btn'),
staminaCounter = document.querySelector(".now-stamina"),
staminaMax = document.querySelector(".max-stamina"),
healthScale = document.querySelector('.health-scale'),
notEnough = document.querySelector(".not-enough-message-area"),
notEnoughCount = document.querySelector(".not-enough-count");

import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";

let staminaSelected = true;


backpackBtn.addEventListener("click", async function(){
    if (staminaSelected){
        yourBackpackCount.textContent = await Get("maxStamina");
        let staminaPrice = await Get("staminaPrice")
        buy1Price.textContent = staminaPrice[1];
        buy10Price.textContent = staminaPrice[10];
        buy100Price.textContent = staminaPrice[100];
    }
    else{
        yourBackpackCount.textContent = await Get("lucky");
        let luckyPrice = await Get("luckyPrice")
        buy1Price.textContent = luckyPrice[1];
        buy10Price.textContent = luckyPrice[10];
        buy100Price.textContent = luckyPrice[100];
    }

})

exitBackpackBtn.addEventListener("click", async ()=>{
    document.querySelector('.igreks').textContent = await Get("igreks");
})

staminaBtn.addEventListener("click", async function(){
    if (!staminaSelected){

        document.querySelector(".well").style.setProperty('--backpack-color', "rgb(220,0,0)")
        document.querySelectorAll(".well")[1].style.setProperty('--backpack-color', "rgb(220,0,0)")
        document.querySelectorAll(".well")[1].style.setProperty('--backpack-color-sec', "rgb(220,0,0)")
        if (localStorage.getItem("language") == "russian"){
            backpackTitle.textContent = "Стамина";
            backpackDesc.textContent = "Если у тебя есть много стамины, ты можешь долго ходить";
    
            yourBackpackP.textContent = "макс. стамина:";
            buy1P.textContent = "1 стамина за";
            buy10P.textContent = "10 стамин за";
            buy100P.textContent = "100 стамин за";
        }
        else {
            backpackTitle.textContent = "Stamina";
            backpackDesc.textContent = "if you have a lot of stamina, you can walk for a long time";
    
            yourBackpackP.textContent = "your max stamina:";
            buy1P.textContent = "buy 1 stamina for";
            buy10P.textContent = "buy 10 stamina for";
            buy100P.textContent = "buy 100 stamina for";
        }

        yourBackpackCount.textContent = await Get("maxStamina");


        let staminaPrice = await Get("staminaPrice")
        buy1Price.textContent = staminaPrice[1];
        buy10Price.textContent = staminaPrice[10];
        buy100Price.textContent = staminaPrice[100];

        buy1.classList.remove("right-backpack")
        buy10.classList.add("right-backpack")
        buy100.classList.remove("right-backpack")

        backpackImg.style.left = "-25vh"
        setTimeout(() => {  
                backpackImg.src = "./styles/imgs/sword.png"
            backpackImg.style.left = "0vh"
        }, 200);
        staminaSelected = true;
    }
});

luckyBtn.addEventListener("click", async function(){
    if (staminaSelected){
        
        document.querySelector(".well").style.setProperty('--backpack-color', "rgb(34, 176, 34)")
        document.querySelectorAll(".well")[1].style.setProperty('--backpack-color', "rgb(34, 176, 34)")
        document.querySelectorAll(".well")[1].style.setProperty('--backpack-color-sec', "rgb(34, 176, 34)")

        if (localStorage.getItem("language") == "russian"){
            backpackTitle.textContent = "Удача";
            backpackDesc.textContent = "Если у тебя много удачи, ты поймаешь больше игреков";
    
            yourBackpackP.textContent = "твоя удача:";

            buy1P.textContent = "1 удача за";
            buy10P.textContent = "10 удач за";
            buy100P.textContent = "100 удач за";
        }
        else {
            backpackTitle.textContent = "Lucky";
            backpackDesc.textContent = "if you have a lot of lucky, you will catch a lot of Igreks";
    
            yourBackpackP.textContent = "your lucky:";
            
            buy1P.textContent = "buy 1 lucky for";
            buy10P.textContent = "buy 10 lucky for";
            buy100P.textContent = "buy 100 lucky for";
        }

        yourBackpackCount.textContent = await Get("lucky");
        
        let luckyPrice = await Get("luckyPrice")
        buy1Price.textContent = luckyPrice[1];
        buy10Price.textContent = luckyPrice[10];
        buy100Price.textContent = luckyPrice[100];

        buy1.classList.add("right-backpack")
        buy10.classList.remove("right-backpack")
        buy100.classList.add("right-backpack")


        backpackImg.style.left = "-25vh"
        setTimeout(() => {  
                backpackImg.src = "./styles/imgs/bag.png"
            backpackImg.style.left = "0vh"
        }, 200);
        staminaSelected = false;
    }
});

async function buyBackpack(count) {
    if (staminaSelected){
        let allPrice = await Get("staminaPrice")
        let price = allPrice[count]
        let Igreks = await Get("igreks")
        if (Igreks >= price){
            allPrice[count] = price + count

            let stamina = await Get("stamina") + count
            let maxStamina = await Get("maxStamina") + count
            Put("maxStamina", maxStamina)
            Put("stamina", stamina)
            Put("igreks", await Get("igreks") - price)
            Put("staminaPrice", allPrice)

            yourBackpackCount.textContent = maxStamina;
            let buyPrice = document.querySelector(`.buy-${count}-price`);
            buyPrice.textContent = allPrice[count];

            staminaCounter.textContent = stamina;
            staminaMax.textContent = maxStamina;
            healthScale.style.width = (100 - (stamina / maxStamina * 100)) + "%";
        }
        else {
            notEnoughCount.textContent = price - Igreks;
            notEnough.style.display = "block";
            setTimeout(() => {notEnough.style.display = "none"; }, 3000);
        }
    }
    else {
        let allPrice = await Get("luckyPrice")
        let price = allPrice[count]
        let Igreks = await Get("igreks")
        if (Igreks >= price){
            allPrice[count] = price + count*100

            let lucky = await Get("lucky") + count
            Put("lucky", lucky)
            Put("igreks", await Get("igreks") - price)
            Put("luckyPrice", allPrice)

            yourBackpackCount.textContent = lucky;
            let buyPrice = document.querySelector(`.buy-${count}-price`);
            buyPrice.textContent = allPrice[count];
        }
        else {
            notEnoughCount.textContent = price - Igreks;
            notEnough.style.display = "block";
            setTimeout(() => {notEnough.style.display = "none"; }, 3000);
        }
    }
}

buy1.addEventListener("click", async()=>{buyBackpack(1)});
buy10.addEventListener("click", async()=>{buyBackpack(10)});
buy100.addEventListener("click", async()=>{buyBackpack(100)});

notEnough.addEventListener("click", ()=>{notEnough.style.display = "none";})