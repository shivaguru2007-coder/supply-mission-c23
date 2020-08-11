class wall
{
	constructor(x,y,width,height)
	{
        var option = {
            'restitution':0.3,
            'density':1.2,
            'isStatic':true
        }
		this.x=x;
		this.y=y;
		this.width=width;
		this.height=height;	
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.width,this.height, option)
	


	}
	display()
	{
			var posBottom=this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill("red")
			rect(0,0,this.width,this.height);
			pop()
			
	}

}
