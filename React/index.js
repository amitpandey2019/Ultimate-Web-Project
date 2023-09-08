class computer{
    constructor(name) {
        this.name = name
    }

    run(){
        console.log("The computer is now running")
    }
}

class Macbook extends computer {
    constructor(name, company) {
        super(name)
        this.company = company
    }

    login() {
        console.log("You are logged into a Macbook " + this.name)
    }
}
const macbook_air = new Macbook('Air', 'Apple');
macbook_air.login()
macbook_air.run()