class roof
{
	//constructor
	constructor(x,y,w,h)
	{
		//options for roof
		var options={
			//moving state 
			isStatic:true			
			}
			//w=width h=height 
			
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	//displaying the things
	display()
	{
			//determines position of ground
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			//centre
			rectMode(CENTER)
			//strokeWeight(4);
			//colour
			fill(128,128,128)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}