noseX=0;
noseY=0;
function preload()
{
    clown_nose = loadImage('https://i.postimg.cc/9Md9WWgp/Beard-and-mustache-clipart-clip-art-library-removebg-preview.png');
}

function setup() 
{  
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO); 
    video.size(300, 300);
    video.hide();

    poseNet =ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose)
}

function modelLoaded()
{
    console.log('poseNet is Initialized');
}

function gotPose(result)
{
    if(result.length > 0)
    {
        console.log(result);
        noseX = result[0].pose.nose.x ;
        noseY = result[0].pose.nose.y ;
        console.log("nose x ="+ result[0].pose.nose.x);
        console.log("nose y ="+ result[0].pose.nose.y);
    }
}



function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX -20,noseY -10,50,50);
}

function take_snapshot()
{
    save('myFilterImage.png');
}