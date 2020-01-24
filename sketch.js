function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(1000);
  // let value = 25;
  // let m = map(value, 0, 100, 0,     height);
  // ellipse(m, 70, 100, 100);
  
  
  let s = second()
  let sm = map(s, 0, 60, 0,     height);
  fill(200,0,255, 50);
  rect(0, 0, width/3, sm);
  
  
  let m = minute()
  let mm = map(m, 0, 60, 0,     height);
  fill(0,100,100, 100);
  rect(width/3, 0, width/3, mm);
  
  let h = hour()
  let hm = map(h, 0, 24, 0,     height);
  fill(255,0,0, 255)
  rect((2*width)/3, 0, width/3, hm);
  
  
  var intervalID = window.setInterval(minutes, 60000);

function minutes() {
  // go check API 
  let curr_m = minute()
  console.log("checking weather API");
}
  
  
//   let h = hour();
//   text('Current hour:\n' + s, 100,     180);
  
  
  // rectMode(CENTER);
  // translate(width / 2, height / 2);
  // translate(p5.Vector.fromAngle(millis() / 1000, 100));
  // rect(0, 0, 20, 20);

}