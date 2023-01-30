[a, b, c, d] = [-1.8, -2.0, -0.5, -0.9]
x = y = prevX = prevY = 0

function setup() {
  createCanvas(600, 600);
  background(0);
}


function draw() {
  background(0,50);
  stroke(255)
  strokeWeight(1)
  translate(300, 300)
  
  t = millis()/10000
  
  x = millis()/2000
  y = millis()/2000

  prevX = x
  prevY = y
  
  for(let n = 0; n < 3000; n++){
    x =  sin(a * prevY + t) + c * cos(a * prevX + t) * sin(b * prevX + t)
    y =  sin(b * prevX + t) + d * cos(b * prevY + t) * sin(a * prevY + t)
    
    // try these for another spicy attractor
    //x =  sin(a * prevY + t)*cos(a * prevX + t) + c * cos(a * prevX + t) * sin(b * prevX + t)
  	//y =  sin(b * prevX + t)*cos(b * prevY + t) + d * cos(b * prevY + t) * sin(a * prevY + t)
    

    point(120 * x, 120 * y)

    prevX = x
    prevY = y
  }
}