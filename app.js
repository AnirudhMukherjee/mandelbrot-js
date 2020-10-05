var minval = -0.5;
var maxval = 0.5;

var minSlider;
var maxSlider;

function setup(){
	createCanvas(300,300);
	pixelDensity(1);

	minSlider = createSlider(-2.5,0,-2.5,0.01);
	maxSlider = createSlider(0,2.5,2.5,0.01);
}

function draw(){
	var maxIterations = 50;
	loadPixels();
	for(var x = 0;x<width;x++){
		for(var y = 0;y<width;y++){

			var a = map(x,0,width,minSlider.value(),maxSlider.value());
			var b = map(y,0,height,minSlider.value(),maxSlider.value());
			var ca = a;
			var cb = b;
			var n =0;
			var z =0; 

			while(n<maxIterations){
				var aa= a*a-b*b;
				var bb = 2*a*b;

				a = aa + ca;
				b = bb + cb;

				if(abs(aa)+abs(bb)>16){
					break;
				}	
				n++;
			}

			var brightness = map(n,0,maxIterations,0,1);
			brightness = map(sqrt(brightness),0,1,0,255);
			if(n==maxIterations){
				brightness = 0;
			}

			var pix = (x+y * width) *4;
			pixels[pix+0] = brightness;
			pixels[pix+1] = brightness;
			pixels[pix+2] = brightness;
			pixels[pix+3] = 255;
		}
	}
	updatePixels();
}