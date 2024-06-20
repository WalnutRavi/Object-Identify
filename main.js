Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});
camera=document.getElementById("Webcam")
Webcam.attach(camera);
function Take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML='<img id="img_capture" src="'+data_uri+'"/>'
    })
}

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/1GkxKd8iZ/model.json",model_loaded)
function model_loaded(){
    console.log("modelo carregado")
}
function Check(){
    img=document.getElementById("img_capture")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if (error){
        console.error(error)
    }
else{
    //console.log(results)
    document.getElementById("Object_result").innerHTML=results[0].label
    document.getElementById("Object_accuracy").innerHTML=results[0].confidence.toFixed(3)
}    
}
