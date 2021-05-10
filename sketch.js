const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var maxDrops = 100;
var drops = []

function preload() {

    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    thunderSound = loadSound("thunderbolt/Thunder.mp3")

}

function setup() {

    engine = Engine.create();
    world = engine.world;

    createCanvas(300, 600)

    bruce=new Bruce(150,400)

    if (frameCount % 10 == 0) {
        for (var i = 0; i < maxDrops; i++) {
            drops.push(new Drop(random(0, 300),random(0,400)));
        }
    }


}

function draw() {

    background("black")

    Engine.update(engine)

    if (frameCount % 100 === 0) {

        thunder = createSprite(random(100, 210), 60, 10, 10);
        thunder.scale = 0.3
        thunder.lifetime = 10
        thunderSound.play();
        rand = Math.round(random(1, 4));
        switch (rand) {
            case 1: thunder.addImage(thunder1);
                break;
            case 2: thunder.addImage(thunder2);
                break;
            case 3: thunder.addImage(thunder3);
                break;
            case 4: thunder.addImage(thunder4);
                break;
            default: break;
        }

    }

    for (var i = 0; i < maxDrops; i++) {
        drops[i].draw();
        drops[i].updateY()
    }

    bruce.display()

    drawSprites()

}

