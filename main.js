Webcam.set({
    width: 310,
    height: 300,
    image_format: "png",
    png_quality: 90,

    constraints: {
        facingMode: "environment"
    }
})

camera = document.getElementById("camera")

Webcam.attach(camera)

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="' + data_uri + '"/>'
    })
}
console.log('ml5version', ml5.version)
classifier = ml5.imageClassifier('MobileNet', modelloded)

function modelloded() {
    console.log("modelloded")
}
function check() {
    img = document.getElementById("capture_image")
    classifier.classify(img, gotresult)
}
function gotresult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("object_name").innerHTML = result[0].label
    }

}
