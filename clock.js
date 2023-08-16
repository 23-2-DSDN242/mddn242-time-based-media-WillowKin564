/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  
  let seconds = obj.seconds;
  let seconds_radius = map (seconds, 0, 59, 1, 25);
  let minutes = obj. minutes;
  let minutes_radius = map (minutes, 0, 59, 1, 25);
  let milllis = obj. millis / 1000.0;

  background(50); //  beige
  fill(200,10,300); // dark grey
 // textSize(40);
  //textAlign(CENTER, CENTER);
  //text("Seconds: " + seconds, width / 2, 200);
 

  
  ellipse(480, 250, 480, 480);
  rotate(PI/3); 
 
  ellipse(480, 250, 300, 300);
  
  
  ellipse(480, 250, 100, 100);
  
}
