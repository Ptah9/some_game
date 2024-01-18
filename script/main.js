const btn_click = document.getElementById("btn_click"),
    title = document.querySelector('.name');

btn_click.addEventListener('click',() => {
    let x = Math.floor(Math.random()*(256));
    let y = Math.floor(Math.random()*(256));
    let z = Math.floor(Math.random()*(256));
    title.style.color = `rgba(${x},${y},${z}, .7)`;
})