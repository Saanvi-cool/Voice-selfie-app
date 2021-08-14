Webcam.set({
    width: 360,
    height: 250,
    image_format: "png",
    png_quality: 90

});
var speech_rec = new window.webkitSpeechRecognition();

function listen() {
    document.getElementById("textbox").innerHTML = "";
    speech_rec.start();
}
speech_rec.onresult = function run(e) {
    console.log(e);
    var content = e.results[0][0].transcript;
    if (content == "take my selfie") {

        document.getElementById("textbox").innerHTML = content;
        text_to_speech();
        Webcam.attach(document.getElementById("camera"));
    }
    
}

function text_to_speech() {
    var speech_synthesis = window.speechSynthesis;
    var speak_text = "taking your selfie in 5 seconds";
    var speak_this = new SpeechSynthesisUtterance(speak_text);
    speech_synthesis.speak(speak_this);
    setTimeout(function(){
        take_pic();
        save();
    },5000);

}
function take_pic(){
    Webcam.snap(function(cam_pick){
        document.getElementById("result").innerHTML='<img id="img1" src="'+cam_pick+'">';
    })
}
function save(){
    img=document.getElementById("img1").src;
    document.getElementById("link").href=img;      
    document.getElementById("link").click();
}

