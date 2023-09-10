canvas = new fabric.Canvas('myCanvas');
// Create canvas variable
//x-tra work
r = document.getElementById('gg');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image){

	
		fabric.Image.fromURL(get_image, function(Img){
			block_image_object = Img;
			block_image_object.scaleToWidth(150);
			block_image_object.scaleToHeight(140);
	
			block_image_object.set({
				left : block_x,
				top : block_y
			});
			canvas.add(block_image_object);
		});
	}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image('rr1.png');
	}
	if(keyPressed == '71')
	{
		block_x =  200;
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png');
	}
	
	if(e.shiftKey = true && keyPressed == 83){

		block_x = 870
		console.log("u are good to go!");
		new_image("sr.png");

	}

}

function chng(){

	document.getElementById('jk').innerHTML = 'Do not Double Click';

}

function ply(){

	r.play();
	document.getElementById('jk').innerHTML = "I told u not to"
}

