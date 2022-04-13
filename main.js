function preLoad()
{
}

function setup()
{
    video=createCapture(VIDEO)
    video.size(450 , 450)

    canvas=createCanvas(400,300);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResults);
}

function modelLoaded()
{
    console.log("poseNet is initialized!")
}

function gotResults(result)
{
    if (result.length > 0)
    {
    }
}

function draw()
{
}