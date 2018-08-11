var x = 0;
var y = 0;
function setup() {
	createCanvas(600, 600);
	background(15);
}

function newPoint(mode) {
  var newX;
  var newY;

  var n = random(1);
	if (mode == 1){
	  if (n < 0.01) {
	    // 1
	    newX =  0;
	    newY =  0.16 * y;
	  } else if (n < 0.86) {
	    // 2
	    newX =  0.85 * x +  0.04 * y;
	    newY = -0.04 * x +  0.85 * y + 1.6;
	  } else if (n < 0.93) {
	    // 3
	    newX =  0.20 * x + -0.26 * y;
	    newY =  0.23 * x +  0.22 * y + 1.6;
	  } else {
	    // 4
	    newX = -0.15 * x +  0.28 * y;
	    newY =  0.26 * x +  0.24 * y + 0.44;
	  }

	   x = newX;
	   y = newY;
	 }
	 if (mode == 2){

		 if (r < 0.02) {
 	    // Equation 1
 	    newX =  0;
 	    newY =  0.25 * y + -0.4;
 	  } else if (r < 0.86) {
 	    // Equation 2
 	    newX =  0.95 * x +  0.005 * y + -0.002;
 	    newY = -0.005 * x +  0.93 * y + 0.5;
 	  } else if (r < 0.93) {
 	    // Equation 3
 	    newX =  0.035 * x + -0.20 * y + -0.09;
 	    newY =  0.16 * x +  0.04 * y + 0.02;
 	  } else {
 	    // Equation 4
 	    newX = -0.04 * x +  0.20 * y + 0.083;
 	    newY =  0.16 * x +  0.04 * y + 0.12;
 	  }

 	   x = newX;
 	   y = newY;

	 }
}

// −2.1820 < x < 2.6558 and 0 ≤ y < 9.9983

function drawPoint(mode){
	let rand = random(1);
	 if (rand < 0.1){
			 stroke(255, 0, 0, 30);
	}
	 else if (rand < 0.15){
			 stroke(255, 255, 0, 30);
	}
	 else{
			 stroke(0, 255, 0, 10);
		}
	 strokeWeight(1.3);

	 //let px = map(x, -3, 3, 0, width);
	 //let py = map(y, 11, 0, 0, height);
	 if (mode == 2){
	 	var px = map(x, -2.1820, 2.6558, 0, width);
	 	var py = map(y, -1, 6.9983, height, 0);

	 }
	 if (mode ==1){
	 	var px = map(x, -2.1820, 2.6558, 0, width);
	 	var py = map(y, 0, 9.9983, height, 0);

	 }
	 point(px, py);
}

function draw() {
	//Choose mode 1 for Barnsley Fern or mode 2 for Cyclosorus Fern
	mode = 1

	for (var i = 0; i < 2000; i++) {
		drawPoint(mode);
		newPoint(mode);
	}
}
