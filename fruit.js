noline="";
fruit="";
function preload(){
    fruit=loadImage("fruit basket.jpg");
}
function setup(){
    canvas=createCanvas(400,350);
    canvas.position(500,215);
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
}
function draw(){
    image(fruit,0,0,40,350);   
}
function modelLoaded(){
    console.log("Model Loaded");
    noline=true;
    objectDetector.detect(fruit,gotResults);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}