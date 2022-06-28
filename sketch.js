let drums, instruments, fx, analyzer1, analyzer2, analyzer3, imgbg, img1, img2,img3, color1, color2;

function preload() { 
  
  imgbg = loadImage('music/BG.jpg'); 
  
  img1 = loadImage('music/a.svg');
  
  img2 = loadImage('music/b.svg');
  
  img3 = loadImage('music/c.svg');
  
  drums = loadSound('music/loop-a.mp3');
  instruments = loadSound('music/loop-b.mp3');
  fx = loadSound('music/loop-c.mp3');
}

function setup() {

  createCanvas(500, 500);

  analyzer1 = new p5.Amplitude();
  analyzer1.setInput(drums);
  
  analyzer2 = new p5.Amplitude();
  analyzer2.setInput(instruments);  
  
  analyzer3 = new p5.Amplitude();
  analyzer3.setInput(fx);    
  
  drums.loop();
  drums.stop();
  drums.setVolume(.8);
  instruments.loop();
  instruments.stop();
  fx.loop();
  fx.stop();
}

function draw() {
  let rms1 = analyzer1.getLevel();
  let rms2 = analyzer2.getLevel();
  let rms3 = analyzer3.getLevel();
  let color1 = map(rms1, 1, 0, 0, 255);
  let color2 = map(rms2, 1, 0, 0, 255);
  let color3 = map(rms3, 1, 0, 0, 255);
  background(imgbg);
  tint(255, color2);
  image(img1, 0, 0, width, height);
  tint(255, color1);
  image(img2, 0, 0, width, height);
  tint(255, color3);
  image(img3, 0, 0, width, height);
}

function mousePressed() {
  if (drums.isPlaying()) {
    // .isPlaying() returns a boolean
    drums.stop();
    instruments.stop();
    fx.stop();
  } else {
    drums.play();
    instruments.play();
    fx.play();
  }
}