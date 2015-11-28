


function st(id){
	  var audio = document.getElementById("myAudio");
    audio.src = "http://api.soundcloud.com/tracks/"+id+"/stream?client_id=44c88b31e709231ae8f61adc66908de3";
    audio.play();
};

function sto(){
  var audio = document.getElementById("myAudio");
  audio.pause();
};

function pl(){
  var audio = document.getElementById("myAudio");
  audio.play();
};


