noseX=0;
noseY=0;

gogleX=0;
gogleY=0;

function preload() {
    clown_nose = loadImage('red-nose.png');
    gogle_image = loadImage('https://img.pngio.com/sunglass-png-transparent-sunglasspng-images-pluspng-goggles-png-3381_1494.png');
}

function setup() {
    canvas  = createCanvas(300, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet  = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y - 10;

        gogleX = results[0].pose.rightEye.x - 10;
        gogleY = results[0].pose.rightEye.y - 10;

        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);

        console.log("gogle x = " + gogleX);
        console.log("gogle y = " + gogleY);
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(gogle_image, gogleX, gogleY, 60, 30);
    image(clown_nose, noseX, noseY, 20, 20);
}

function take_snapshot() {
    save('myClownImage.png');
}