// from generation.js

// function showLevel(level) {
//     let map = "-----------------------\n"
//     for (let y = 0; y < 10; y++) {
//         map += "| "
//         for (let x = 0; x < 10; x++) map += String(level[y][x]) + " "; 
//         map+="|\n"
        
//     } 
//     map+="-----------------------"
//     return map;
// }


// console.log(
//     showLevel(
//         Generation(entranceSide)
//     )
// )





//from main.js

// let levelNow = new Level(Generation(3));
// // localStorage.setItem('levelNow', JSON.stringify(levelNow));
// levelNow = new Level(Generation(3));         
// nowY = levelNow.startY
// nowX = levelNow.startX
// showRoom(levelNow.adaptedLevel[nowY][nowX])


// btn_click.addEventListener('click',() => {
//     let x = Math.floor(Math.random()*(256));
//     let y = Math.floor(Math.random()*(256));
//     let z = Math.floor(Math.random()*(256));
//     title.style.color = `rgba(${x},${y},${z}, .7)`;
// })