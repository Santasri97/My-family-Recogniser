Webcam.set({
    width: 350,
    height: 350,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function Capture() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="img" src ="' + data_uri + '"/>';
    });
}

console.log('The version of ml5 is ', ml5.version);
v1 = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/YRmF1OoOo/model.json", Santa);

function Santa() {
    console.log("Model is loaded !");
}

function Identify() {
    v2 = document.getElementById('img');
    v1.classify(v2, check);
}

function check(error,results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("Object").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}