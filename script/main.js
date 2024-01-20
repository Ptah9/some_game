const healthScale = document.querySelector('.health-scale'),
    artifactsBtn = document.querySelector('.artifacts-btn');


let max_health = 1000,
    health = 1000;

addEventListener("click", function(){
    if (health >= 0) {
        health -= 100
    }
    healthScale.style.width = health / max_health * 100 + "%"
})

// healthScale.style.width = max_health / health + "%"

// btn_click.addEventListener('click',() => {
//     let x = Math.floor(Math.random()*(256));
//     let y = Math.floor(Math.random()*(256));
//     let z = Math.floor(Math.random()*(256));
//     title.style.color = `rgba(${x},${y},${z}, .7)`;
// })