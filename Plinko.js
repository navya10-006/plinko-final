class Plinko{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y/2,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("brown");
        circle(pos.x,pos.y,10);
    }
}