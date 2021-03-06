class Form{
    constructor(){
        this.input= createInput("Name")
        this.button= createButton("Start")
        this.greeting= createGreeting("h3")
    }
    display(){
        title= createElement("h2")
        title.html("Car Racing")
        title.position(displayWidth/2-50,0)

        this.input.position(displayWidth/2-30,displayHeight/2-50)
        this.button.position(displayWidth/2-10,displayHeight/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name= this.input.value()
            playerCount+= 1
            player.index= playerCount
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("Welcome "+ player.name)
            this.greeting.position(displayWidth/2-50,displayHeight/2)
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}