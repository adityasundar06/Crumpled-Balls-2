class trashcan
{
	constructor(inputX,inputY)
	{
		this.x=inputX;
		this.y=inputY;
		this.trashcanWidth=200;
		this.trashcanHeight=100;
        this.thickness=20;
        this.image = loadImage("dustbingreen.png");

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.trashcanWidth, this.thickness, {isStatic:true})
        World.add(world, this.bottomBody)

		this.leftWallBody=Bodies.rectangle(this.x-this.trashcanWidth/2, this.y-this.trashcanHeight/2, this.thickness, this.trashcanHeight, {isStatic:true})		
		World.add(world, this.leftWallBody)

		this.rightWallBody=Bodies.rectangle(this.x+this.trashcanWidth/2, this.y-this.trashcanHeight/2, this.thickness, this.trashcanHeight, {isStatic:true})
		World.add(world, this.rightWallBody);
	}
	display()
	{
		var posBottom=this.bottomBody.position;
		var posLeft=this.leftWallBody.position;
		var posRight=this.rightWallBody.position;

		push()
		translate(posLeft.x, posLeft.y);
		rectMode(CENTER)
		fill(255)
		stroke(255)
		rect(0,0,this.thickness, this.trashcanHeight);
		pop()

		push()
		translate(posRight.x, posRight.y);
		rectMode(CENTER)
		stroke(255)
		fill(255)
		rect(0,0,this.thickness, this.trashcanHeight);
		pop()

		push()
		translate(posBottom.x, posBottom.y);
		rectMode(CENTER)
		stroke(255)
		fill(255)
        rect(0,0,this.trashcanWidth, this.thickness);
        imageMode(CENTER);
        scale(3.9);
        image(this.image, 0, -25, 50, 50);
		pop()	
	}
}