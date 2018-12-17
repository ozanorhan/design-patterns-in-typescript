interface Dimensions {
    width: number,
    height: number
}

interface Door {
    getWidth: () => number
    getHeight: () => number
}

class WoodenDoor implements Door {
    height: number
    width: number
    constructor(props:Dimensions) {
        this.height = props.height
        this.width = props.width
    }

    getHeight(): number {
        return this.height
    }

    getWidth(): number {
        return this.width
    }
}

class DoorFactory {
    makeDoor(props:Dimensions): Door {
        return new WoodenDoor(props)
    }
}

const factory = new DoorFactory;
const door1 = factory.makeDoor({height: 100, width: 100})
const door2 = factory.makeDoor({height: 50, width: 50})
console.log(door1.getWidth()) // 100
console.log(door2.getHeight()) // 50