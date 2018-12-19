class Burger {
    protected size: number
    protected cheese: boolean = false
    protected pepperoni: boolean = false
    protected lettuce: boolean = false
    protected tomato: boolean = false

    constructor(builder: BurgerBuilder) {
        this.size = builder.size
        this.cheese = builder.cheese
        this.pepperoni = builder.pepperoni
        this.lettuce = builder.lettuce
        this.tomato = builder.tomato

    }
}

class BurgerBuilder {
    size: number
    cheese: boolean = false
    pepperoni: boolean = false
    lettuce: boolean = false
    tomato: boolean = false

    constructor(size: number) {
        this.size = size
    }

    addCheese() : BurgerBuilder {
        this.cheese = true
        return this
    }

    addPepperoni() : BurgerBuilder {
        this.pepperoni = true
        return this
    }

    addLettuce() : BurgerBuilder {
        this.lettuce = true
        return this
    }

    addTomato() : BurgerBuilder {
        this.tomato = true
        return this
    }

    build(): Burger {
        return new Burger(this)
    }
}

const cheeseBurger = new Burger(new BurgerBuilder(12).addCheese().addLettuce().addTomato())
console.log(cheeseBurger)