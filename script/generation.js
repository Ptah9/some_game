// let entranceSide = 1;

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function getRandomArbitrary(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); 
// }



// function Generation(entranceSide) {

//     let level = [
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     ];
//     switch(entranceSide){
//         case 1:     //left
//             level[getRandomArbitrary(1,9)][9] = 2; //entrance
            
//             level[getRandomArbitrary(1,9)][0] = getRandomInt(2)*3; //exit
//             level[9][getRandomArbitrary(1,9)] = getRandomInt(2)*3; //exit
//             level[0][getRandomArbitrary(1,9)] = getRandomInt(2)*3; //exit

//             lol = 1;
//             for (let y = 0; y < 10; y++) for (let x = 0; x < 10; x++) if (level[y][x] == 3) lol = 0;
//             level[getRandomArbitrary(1,9)][0] = lol*3; //exit
            
            
//         break;

//         case 2:     //right
//             level[getRandomArbitrary(1,9)][0] = 2; //entrance

//             level[getRandomArbitrary(1,9)][9] = getRandomInt(2)*3; //exit
//             level[9][getRandomArbitrary(1,9)] = getRandomInt(2)*3; //exit
//             level[0][getRandomArbitrary(1,9)] = getRandomInt(2)*3; //exit

//             lol = 1;
//             for (let y = 0; y < 10; y++) for (let x = 0; x < 10; x++) if (level[y][x] == 3) lol = 0;
//             level[getRandomArbitrary(1,9)][9] = lol*3; //exit

//         break;

//         case 3:     //top
//             level[9][getRandomArbitrary(1,9)] = 2; //entrance

//             level[getRandomArbitrary(1,9)][9] = getRandomInt(2)*3; //exit
//             level[getRandomArbitrary(1,9)][0] = getRandomInt(2)*3; //exit
//             level[0][getRandomArbitrary(1,9)] = getRandomInt(2)*3; //exit

//             lol = 1;
//             for (let y = 0; y < 10; y++) for (let x = 0; x < 10; x++) if (level[y][x] == 3) lol = 0;
//             level[0][getRandomArbitrary(1,9)] = lol*3; //exit
//         break;

//         case 4:     //bottom
//             level[0][getRandomArbitrary(1,9)] = 2; //entrance

//             level[getRandomArbitrary(1,9)][9] = getRandomInt(2)*3; //exit
//             level[getRandomArbitrary(1,9)][0] = getRandomInt(2)*3; //exit
//             level[9][getRandomArbitrary(1,9)] = getRandomInt(2)*3; //exit

//             lol = 1;
//             for (let y = 0; y < 10; y++) for (let x = 0; x < 10; x++) if (level[y][x] == 3) lol = 0;
//             level[9][getRandomArbitrary(1,9)] = lol*3; //exit

//         break;



//     }

//     return level


// }













function showLevel(level) {
    let map = "-----------------------\n"
    for (let y = 0; y < 10; y++) {
        map += "| "
        for (let x = 0; x < 10; x++) map += String(level[y][x]) + " "; 
        map+="|\n"
        
    } 
    map+="-----------------------"
    return map;
}


console.log(
    showLevel(
        Generation(entranceSide)
    )
)