class paper
{
	constructor(inputX,inputY,inputRadius)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2	
        }
        this.image = loadImage("paper.png");
		this.x=inputX;
		this.y=inputY;
		this.r=inputRadius;
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
	}
	display()
	{	
		var posPaper=this.body.position;		

		push()
		translate(posPaper.x, posPaper.y);
		rectMode(CENTER)
		strokeWeight(3);
		fill(255,0,255)
        ellipse(0,0,this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
		pop()	
	}
}