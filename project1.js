// let time2 = document.getElementById('time-e');
// console.log(time2)
let time = document.getElementById('time');
function displayTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let Second = date.getSeconds();
    let timeOfDay = 'AM';
    if (hour > 12) {
        hour = '0' + (hour - 12);
        timeOfDay = 'PM';
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (Second < 10) {
        Second = '0' + Second;
    }
    time.innerHTML = hour + ':' + minute + ':' + Second + timeOfDay;
    // time2.innerHTML = hour + ':' + minute + ':' + Second + timeOfDay;

}
setInterval(displayTime, 1000);


let Ft = document.getElementById('dess');
console.log(dess);
let trig = true;
Ft.addEventListener('click',function (){
    let de = document.getElementById('Take');
    
    if (trig === true){
        de.style.display='block';
        trig = false;
    } else {
        de.style.display='none';
        trig = true;
    }
     
});



function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
