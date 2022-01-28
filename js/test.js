$(document).ready(function() {
    var obj = document.createElement("audio");
    obj.src = "css/Assets/sound Effects/ovobot.wav";
    obj.volume = 0.5;
    obj.autoPlay = false; 
    obj.preLoad = true; 
    obj.controls = true; 


    $(".playSound").click(function() {
        obj.play(); 
    })
})
    