interface Door {
    getDescription() : string
}

class WoodenDoor implements Door {
    getDescription() : string {
        return 'I am a wooden door'
    }
}

class IronDoor implements Door {
    getDescription() : string {
        return 'I am an iron door'
    }
}

interface DoorFittingExpert {
    getDescription () : string 
}

class Welder implements DoorFittingExpert {
    getDescription()  {
        return 'I can only fit iron doors'
    }
}

class Carpenter implements DoorFittingExpert {
    getDescription()  {
        return 'I can only fit wooden doors'
    }
}

interface DoorFactory {
    makeDoor(): Door
    makeFittingExpert(): DoorFittingExpert
}

class WoodenDoorFactory implements DoorFactory {
    makeDoor() {
        return new WoodenDoor()
    }

    makeFittingExpert() {
        return new Carpenter()
    }
}

class IronDoorFactory implements DoorFactory {
    makeDoor() {
        return new IronDoor()
    }

    makeFittingExpert() {
        return new Welder()
    }
}

// implementation
const doorFactory = new WoodenDoorFactory()
const door = doorFactory.makeDoor()
const expert = doorFactory.makeFittingExpert()

console.log(door.getDescription())
console.log(expert.getDescription())