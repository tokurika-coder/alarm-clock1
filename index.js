console.log("hello world");
const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);
var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');

function ringbell()
{
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    const alarm=document.getElementById('alarm');
    alarmDate=new Date(alarm.value);
    console.log(`seting alarm for ${alarmDate}...`)
    now= new Date();
   console.log(now);
    let timeofalarm = alarmDate-now;
    console.log(timeofalarm);
    if(timeofalarm>=0){
        setTimeout(() => {
            console.log("ringing now");
            ringbell();
        }, timeofalarm);
    }
   
}