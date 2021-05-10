class Drop{

    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1,
            isStatic:false       
        }
        this.rain_drop= Bodies.circle(x,y,5,options)
        World.add(world, this.rain_drop);
    }

    updateY(){    

        if(this.rain_drop.position.y > height){
            Matter.Body.setPosition(this.rain_drop, {x:random(0,300), y:random(0,100)})
        }
    }

    draw(){
        var pos=this.rain_drop.position
        fill("blue")
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,5,5);
    }
}