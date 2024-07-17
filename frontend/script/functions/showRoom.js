let upGate =    document.querySelector('#up-gate'),
rightGate = document.querySelector('#right-gate'),
bottomGate = document.querySelector('#bottom-gate'),
leftGate = document.querySelector('#left-gate'),
roomFloor = document.querySelector(".room");

function showRoom(room) {
    roomFloor.style["background-image"] = `url(styles/imgs/${room.floor}.png)`
    if (room.upGate){
        if(room.upGate=="next"){
            upGate.style.backgroundColor = "rgb(140, 0, 255)";
        }
        else if(room.upGate=="back"){
            upGate.style.backgroundColor = "#2d2d2d";
        }
        else{
            upGate.style.backgroundColor = "#5c5c5c";
        }
    }
    else {
        upGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }


    if (room.rightGate){
        if(room.rightGate=="next"){
            rightGate.style.backgroundColor = "rgb(140, 0, 255)";
        }
        else if(room.rightGate=="back"){
            rightGate.style.backgroundColor = "#2d2d2d";
        }
        else{
            rightGate.style.backgroundColor = "#5c5c5c";
        }
    }
    else {
        rightGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }


    if (room.bottomGate){
        if(room.bottomGate=="next"){
            bottomGate.style.backgroundColor = "rgb(140, 0, 255)";
        }
        else if(room.bottomGate=="back"){
            bottomGate.style.backgroundColor = "#2d2d2d";
        }
        else{
            bottomGate.style.backgroundColor = "#5c5c5c";
        }
    }
    else {
        bottomGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }


    if (room.leftGate){
        if(room.leftGate=="next"){
            leftGate.style.backgroundColor = "rgb(140, 0, 255)";
        }
        else if(room.leftGate=="back"){
            leftGate.style.backgroundColor = "#2d2d2d";
        }
        else{
            leftGate.style.backgroundColor = "#5c5c5c";
        }
    }
    else {
        leftGate.style.backgroundColor = "rgba(0, 0, 0, 0)"
    }
}


export default showRoom;
