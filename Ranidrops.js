class Raindrops{
     rand= randomNumber(0,800);
     rand2= randomNumber(0,400);
    constructor(rand,rand2,width,height){
        var options={
            'density':1,
            'friction': 1,
            'restitution':0,
            'velocityY':2
        };

        for(rand=rand+50; rand < 750; rand=rand+50) {         
        this.body = Bodies.rectangle(rand,rand2,2,7,options);
        this.width=2;
        this.height=7;
        World.add(world, this.body);
        };
        };
        display(){
            var pos = this.body.position;
            pos.x=rand;
            pos.y=rand2;

            push();
            fill('green')
            stroke('black')
            rectMode(CENTER)
            rect(rand,rand2,this.width,this.height);
            pop();
        };
    };
