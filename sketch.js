const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg,ground,hero,monster,fly;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26;

function preload() {
  bgImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,600,1500,20);
  hero = new Superhero(300,150,350,220);
  fly = new Fly(hero.body, { x: 300, y: 150 });

  box1 = new Block(700,100,130,130);
  box2 = new Block(700,100,130,130);
  box3 = new Block(700,100,130,130);
  box4 = new Block(700,100,130,130);
  box5 = new Block(700,100,130,130);
  box6 = new Block(700,100,130,130);
  box7 = new Block(700,100,130,130);
  box8 = new Block(800,100,130,130);
  box9 = new Block(800,100,130,130);
  box10 = new Block(800,100,130,130);
  box11 = new Block(800,100,130,130);
  box12 = new Block(800,100,130,130);
  box13 = new Block(800,100,130,130);
  box14 = new Block(900,100,130,130);
  box15 = new Block(900,100,130,130);
  box16 = new Block(900,100,130,130);
  box17 = new Block(900,100,130,130);
  box18 = new Block(900,100,130,130);
  box19 = new Block(900,100,130,130);
  box20 = new Block(900,100,130,130);
  box21 = new Block(900,100,130,130);
  box22 = new Block(1000,100,130,130);
  box23 = new Block(1000,100,130,130);
  box24 = new Block(1000,100,130,130);
  box25 = new Block(1000,100,130,130);
  box26 = new Block(1000,100,130,130);
 
  monster = new Monster(1200,500,200);
}

function draw() {
  background(bgImg);
  Engine.update(engine);

  ground.display();
  hero.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();

  monster.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}