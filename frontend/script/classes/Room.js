class Room {
    constructor(up, right, bottom, left, contains, type, floor) {
        this.upGate = up;
        this.rightGate = right;
        this.bottomGate = bottom;
        this.leftGate = left;
        this.contains = contains;     //chest/enemy/nothing
        this.type = type;     //entrance/exit/ordinary
        this.floor = floor;
    }
}

export default Room;