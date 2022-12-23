var SpeechRecognition=window.webkitSpeechRecognition;

var Recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    Recognition.start();

}

Recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);
    if(content="take my selfie"){
        console.log("taking selfie")
        speak()
    }
    
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds"
    var utter=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter)
    Webcam.attach(camera)
    setTimeout(function(){
        snapshot();
        save()
    },5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfieimage" src="'+data_uri+'">'
    })
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfieimage").src;
    link.herf=image;
    link.click()
}