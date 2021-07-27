var colors = [];

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);
  x_jump = 42;
  y_jump = 42;
  stroke('grey');
  strokeWeight(3);

    for (var j = 0 ; j < 3; j++) {
      for (var i = 0; i < 15; i++) {
        if (j % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };
        rect(i * x_jump + 12 + j*10, j * y_jump, 47, 47);
      }
    }


}





