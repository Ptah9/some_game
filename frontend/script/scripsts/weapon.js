const weaponBtn = document.querySelector('#weapon-btn'),
    weaponArea = document.querySelector('.weapon-area'),
    swordBtn = document.querySelector('#sword'),
    magicBtn = document.querySelector('#magic'),
    shieldBtn = document.querySelector('#shield'),
    ringBtn = document.querySelector('#ring'),
    weaponName = document.querySelector('.weapon-text h2'),
    weaponShortDesc = document.querySelector('.weapon-text h4'),
    weaponDesc = document.querySelector('.weapon-description p'),
    scoreSpan = document.querySelector('.score'),
    nickname = document.querySelector('.name');


let sword, magic, shield, ring;
let weaponSelected = swordBtn
fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/swords.json')
.then(response => response.json())
.then(jsonData => {
    sword = jsonData[localStorage.sword]
    weaponName.textContent = sword.name;
    weaponShortDesc.textContent = sword.shortDesc;
    weaponDesc.textContent = sword.description;
    swordBtn.classList.add('weapon-btn-active');
});

weaponBtn.addEventListener("click", function(){
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/swords.json')
    .then(response => response.json())
    .then(jsonData => {
        sword = jsonData[localStorage.sword]
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/magics.json')
    .then(response => response.json())
    .then(jsonData => {
        magic = jsonData[localStorage.magic]
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/shields.json')
    .then(response => response.json())
    .then(jsonData => {
        shield = jsonData[localStorage.shield]
    });
    fetch('https://raw.githubusercontent.com/Ptah9/some_game/main/frontend/script/weapons_en/rings.json')
    .then(response => response.json())
    .then(jsonData => {
        ring = jsonData[localStorage.ring]
    });



    weaponArea.style.display = "block"
    localStorage.weaponClosed = false;
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