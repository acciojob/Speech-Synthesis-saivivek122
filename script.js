// Your script here.
let synth= window.speechSynthesis;
let voices;
let textArea=document.getElementById("textarea");
let speakButton=document.getElementById("speak");
let stopButton=document.getElementById("stop");
let voicesOptions=document.getElementById("voices");
let rateInput=document.getElementById("rateinput");
let pitchInput=document.getElementById("pitchinput");
console.log(voicesOptions)
function availableVoices(){
  voices=synth.getVoices();
  
  for(let [i,voice] of voices.entries()){
    let option=document.createElement("option");
    option.textContent=`${voice.name} (${voice.lang})`
    option.value=i;
    voicesOptions.appendChild(option);
  }
  
}

if("onvoiceschanged" in synth){
  synth.onvoiceschanged=availableVoices;
}
else{
  availableVoices();
}

speakButton.addEventListener("click",()=>{
  let utterThis=new SpeechSynthesisUtterance(textArea.value);
  console.log(textArea.value);
  utterThis.voice=voices[voicesOptions.value];
  // console.log(voicesOptions.value);
  utterThis.rate=parseFloat(rateInput.value);
  utterThis.pitch=parseFloat(pitchInput.value);
  synth.speak(utterThis);
})
stopButton.addEventListener("click",()=>{
  synth.cancel();
})
