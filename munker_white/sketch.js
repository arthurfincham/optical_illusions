function setup() {
  createCanvas(750, 750);
}

function draw() {
  background(255);
 


  // LINES
  noStroke();
  for (var i = 0; i < 50; i++){
    if (i % 2 == 0) {
      fill('magenta');
      rect(0, 750/50 * i, width)
  } else {
    fill('green');
      rect(0, 750/50 * i, width)
  }
}



noStroke();
  for (var i = 0; i < 50; i++){
    if (i % 2 == 0) {
      fill('magenta');
      rect(width*0.2, 750/50 * i, width*0.2)
  } else {
    fill(255, 238, 138);
      rect(width*0.2, 750/50 * i, width*0.2)
  }
}

noStroke();
  for (var i = 0; i < 50; i++){
    if (i % 2 == 0) {
      fill(255, 238, 138);
      rect(width*0.6, 750/50 * i, width*0.2)
  } else {
    fill('green');
      rect(width*0.6, 750/50 * i, width*0.2)
  }
}
}
