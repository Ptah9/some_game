const healthScale = document.querySelector('.health-scale'),
mapBtn = document.querySelector('#map-btn'),
artifactsBtn = document.querySelector('#artifacts-btn'),
weaponBtn = document.querySelector('#weapon-btn'),
mapArea = document.querySelector('.map-area'),
exitMapBtn = document.querySelector('.exit-map-btn'),
exitWeaponBtn = document.querySelector('.exit-weapon-btn'),
weaponArea = document.querySelector('.weapon-area');



artifactsBtn.addEventListener("click", function(){
    alert("soon...");
});
mapBtn.addEventListener("click", function(){
    mapArea.style.display = "block"
    localStorage.mapClosed = false;
});
exitMapBtn.addEventListener("click", function(){
    mapArea.style.display = "none";
    localStorage.mapClosed = true;
});
exitWeaponBtn.addEventListener("click", function(){
    weaponArea.style.display = "none";
    localStorage.weaponClosed = true;
});
