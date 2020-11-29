class Box {

constructor(x,y,width,height){

    var options ={
        isStatic: false,
        restitution : 0.8,
        density : 1, 
        friction : 0.3
        
    }




    this.body = Bodies.rectangle(x,y,width,height,options)
    World.add(world, this.body)
    this.width = width
    this.height = height

}

display(){ 
    var pos = this.body.position
    push()
   translate(pos.x,pos.y)
   rotate(this.body.angle)
    rectMode(CENTER)
    fill("white")
    rect(0,0,this.width, this.height)
    pop()

}

}