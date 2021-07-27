var colors = [];

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);
  x_jump = 55;
  y_jump = 55;
  stroke('grey');
  strokeWeight(3);

    for (var j = 0 ; j < 50; j++) {
      for (var i = 0; i < 50; i++) {
        if (j % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };
        if (j % 3 == 0){
          rect(i * x_jump + 12 + 30, j * y_jump, 60, 60);
        } else if (j % 2 == 0){
          rect(i * x_jump + 12 + 15, j * y_jump, 60, 60);
        } else {
          rect(i * x_jump + 12, j * y_jump, 60, 60);
        }
      }
    }


}





