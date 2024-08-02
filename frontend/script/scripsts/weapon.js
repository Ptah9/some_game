const backpackBtn = document.querySelector('#backpack-btn'),
    weaponBtn = document.querySelector('#weapon-btn'),
    weaponArea = document.querySelector('.backpack-area'),
    swordBtn = document.querySelector('#sword'),
    magicBtn = document.querySelector('#magic'),
    shieldBtn = document.querySelector('#shield'),
    ringBtn = document.querySelector('#ring'),
    weaponName = document.querySelector('.weapon-text h2'),
    weaponShortDesc = document.querySelector('.weapon-text h4'),
    weaponDesc = document.querySelector('.weapon-description p'),
    scoreSpan = document.querySelector('.score'),
    nickname = document.querySelector('.name');


// import Get from "../functions/interactionWithAPI/testGet.js";


let sword, magic, shield, ring;
let weaponSelected = swordBtn
fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/swords.json')
.then(response => response.json())
.then(jsonData => {
    let resp = localStorage.getItem("sword")
        sword = jsonData[resp]
        weaponName.textContent = sword.name;
        weaponShortDesc.textContent = sword.shortDesc;
        weaponDesc.textContent = sword.description;
        swordBtn.classList.add('weapon-btn-active');
    // Get("sword").then((resp)=>{
    //     sword = jsonData[resp]
    //     weaponName.textContent = sword.name;
    //     weaponShortDesc.textContent = sword.shortDesc;
    //     weaponDesc.textContent = sword.description;
    //     swordBtn.classList.add('weapon-btn-active');
    // })
});

weaponBtn.addEventListener("click", function(){
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/swords.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("sword")
        sword = jsonData[resp]
        // Get("sword").then((resp)=>{
        //     sword = jsonData[resp]
        // })
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/magics.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("magic")
        magic = jsonData[resp]

        // Get("magic").then((resp)=>{
        //     magic = jsonData[resp]
        // })
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/shields.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("shield")
        shield = jsonData[resp]
        
        // Get("shield").then((resp)=>{
        //     shield = jsonData[resp]
        // })
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/rings.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("ring")
        ring = jsonData[resp]
        
        // Get("ring").then((resp)=>{
        //     ring = jsonData[resp]
        // })
    });

});

backpackBtn.addEventListener("click", function(){
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/swords.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("sword")
        sword = jsonData[resp]
        // Get("sword").then((resp)=>{
        //     sword = jsonData[resp]
        // })
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/magics.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("magic")
        magic = jsonData[resp]
        
        // Get("magic").then((resp)=>{
        //     magic = jsonData[resp]
        // })
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/shields.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("shield")
        shield = jsonData[resp]
        
        // Get("shield").then((resp)=>{
        //     shield = jsonData[resp]
        // })
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/rings.json')
    .then(response => response.json())
    .then(jsonData => {
        let resp = localStorage.getItem("ring")
        ring = jsonData[resp]
        
        // Get("ring").then((resp)=>{
        //     ring = jsonData[resp]
        // })
    });

});



swordBtn.addEventListener("click", function(){
    weaponName.textContent = sword.name;
    weaponShortDesc.textContent = sword.shortDesc;
    weaponDesc.textContent = sword.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    swordBtn.classList.add('weapon-btn-active');
    weaponSelected = swordBtn;

})

magicBtn.addEventListener("click", function(){
    weaponName.textContent = magic.name;
    weaponShortDesc.textContent = magic.shortDesc;
    weaponDesc.textContent = magic.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    magicBtn.classList.add('weapon-btn-active');
    weaponSelected = magicBtn;
})

shieldBtn.addEventListener("click", function(){
    weaponName.textContent = shield.name;
    weaponShortDesc.textContent = shield.shortDesc;
    weaponDesc.textContent = shield.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    shieldBtn.classList.add('weapon-btn-active');
    weaponSelected = shieldBtn;
})

ringBtn.addEventListener("click", function(){
    weaponName.textContent = ring.name;
    weaponShortDesc.textContent = ring.shortDesc;
    weaponDesc.textContent = ring.description;
    weaponSelected.classList.remove('weapon-btn-active'); 
    ringBtn.classList.add('weapon-btn-active');
    weaponSelected = ringBtn;
})