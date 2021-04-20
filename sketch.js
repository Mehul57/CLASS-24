const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,bird1,log1,box3,box4,pig2,log2,box5,log3

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,350,50,50);
    box2 = new Box(1000,350,50,50);
    ground = new Ground(600,380,1200,20)
    pig1= new Pig(900,350)
    bird1=new Bird(100,50)
    log1=new Log(900,330,240,PI/2)
    box3=new Box(800,280,50,50)
    box4=new Box(1000,280,50,50)
    pig2=new Pig(900,320)
    log2=new Log(900,260,240,PI/2)
    box5=new Box(900,190,50,50)
    log3=new Log(850,190,100,PI/7)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display()
    log1.display()
    box3.display()
    box4.display()
    pig2.display()
    log2.display()
    box5.display()
    log3.display()

}
