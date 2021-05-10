class Bruce {
    constructor(x,y){
        var options = {
            isStatic: true,
        }
        this.image = loadImage("bruceWalking.png");
        this.bruce = Bodies.circle(x,y,50,options);
        World.add(world, this.bruce)
    }

    display(){
        var pos = this.bruce.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}