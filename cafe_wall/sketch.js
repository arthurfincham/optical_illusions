var colors = [];

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);
  jump = 42;
  stroke('grey');
  strokeWeight(4);
  for (var j = 0; j < 42; j++) {
    for (var i = 0; i < 42; i++) {
      if (j % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      };if (i % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      };
    rect(i * jump + 42, j * jump + 42, 47, 47);
  }
}
}





