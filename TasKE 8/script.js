
// var div = document.querySelector('div')

// document.addEventListener('keydown',function(det){
//     console.log(det.key)
//     div.innerHTML = det.key
// })

var keys = document.querySelectorAll('#white')
var  active = element.classList.remove("active");

var one = new Audio('./31.mp3')
var two = new Audio('./32.mp3')
var three = new Audio('./33.mp3')
var four = new Audio('./34.mp3')
var five = new Audio('./35.mp3')
var six = new Audio('./36.mp3')
var seven = new Audio('./37.mp3')
var eight = new Audio('./38.mp3')
var nine = new Audio('./39.mp3')
var ten = new Audio('./40.mp3')
var eleven = new Audio('./41.mp3')
var twelve = new Audio('./42.mp3')
var thirteen = new Audio('./43.mp3')
var fourteen = new Audio('./44.mp3')
var fifteen = new Audio('./45.mp3')
var sixteen = new Audio('./46.mp3')

console.log(keys)
document.addEventListener('keydown',function(det){
    console.log(det.key)

if(det.key === "a"){
    one.play();
    one.currentTime = 0;
}
if(det.key === "s"){
    two.play();
    two.currentTime = 0;
}
if(det.key === "d"){
    three.play();
    three.currentTime = 0;
}
if(det.key === "f"){
    four.play();
    four.currentTime = 0;
}
if(det.key === "g"){
    five.play();
    five.currentTime = 0;
}
if(det.key === "h"){
    six.play();
    six.currentTime = 0;
}
if(det.key === "j"){
    seven.play();
    seven.currentTime = 0;
}
if(det.key === "k"){
    eight.play();
    eight.currentTime = 0;
}
if(det.key === "l"){
    nine.play();
    nine.currentTime = 0;
}
if(det.key === "z"){
    ten.play();
    ten.currentTime = 0;
}
if(det.key === "x"){
    eleven.play();
    eleven.currentTime = 0;
}
if(det.key === "c"){
    twelve.play();
    twelve.currentTime = 0;
}
if(det.key === "v"){
    thirteen.play();
    thirteen.currentTime = 0;
}
if(det.key === "b"){
    fourteen.play();
    fourteen.currentTime = 0;
}
if(det.key === "n"){
    fifteen.play();
    fifteen.currentTime = 0;
}
if(det.key === "m"){
    sixteen.play();
    sixteen.currentTime = 0;
}

})


// var one = new Audio('./50.mp3');

// document.addEventListener('keydown', function(det) {
//     if(det.key === "a"){
//         one.currentTime = 0; // restart sound
//         one.play();
//     }
// });
