noseX=0;
noseY=0;

function preload(){clown_nose=loadImage('https://i.postimg.cc/RFX6N7M7/clownnose.png');}

function setup(){
canvas=createCanvas(300, 300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){console.log("model Loaded");}

function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX,noseY,30,30);
}

function gotPoses(results)
{
if(results.length >0)
{
console.log(results);
noseX=results[0].pose.nose.x-15;
noseY=results[0].pose.nose.y-15;
}
}
















function download(){save('myfilterimage.png');}
