function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);

  for (var i = 0; i < 100; i++) {
    line(width / 100 * i, 0, width / 100 * i, height);
    // LINE SHAKE ANIMATION
    if (i == 1) {
      translate(random(-0.9, 0.9), random(-0.9, 0.9));
    
  }
  }

}