var mirror;
var img;

function setup() {
  createCanvas(640, 480);
  mirror = createCapture(VIDEO);
  mirror.size(320, 240);

  img = createImage(640, 480);
  img.loadPixels();
}

function draw() {
  background(0, 0, 0, 0);

  mirror.loadPixels();

  for (var i = 0; i < 4 * (mirror.width * mirror.height); i += 4) {
    var r = mirror.pixels[i];
    var g = mirror.pixels[i + 1];
    var b = mirror.pixels[i + 2];
    var a = mirror.pixels[i + 3];

    if (g > 225) {
      r = 0;
      g = 0;
      b = 0;
      a = 0;

    }

    img.pixels[i] = r;
    img.pixels[i + 1] = g;
    img.pixels[i + 2] = b;
    img.pixels[i + 3] = a;
  }

  img.updatePixels();
  push();
  translate(img.width, 0);
  scale(-1, 1);
  image(img, 0, 0);
  pop();
}

function keyTyped() {
  if (key == 'a') {
    thresh += 5;
  }
  if (key == 'f') {
    thresh = thresh - 5;
  }
}