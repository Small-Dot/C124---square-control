 function preload(){

 }
 function setup(){
   video = createCapture(VIDEO);
   video.size(300, 300);
   canvas = createCanvas(800, 340);
   canvas.position(330, 200);
   poseNet = ml5.poseNet(video, modelLoaded);
   posenet.on('pose', gotPoses);
 }
 function draw(){
  background("orange");
  
 }
 function modelLoaded(){
     console.log("model loaded")
 }
 function gotPoses(results){
 if(results.length > 0){
     console.log(results);
 }
 }