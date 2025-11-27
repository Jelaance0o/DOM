var div = document.querySelector('div')

document.addEventListener('keydown',function(det){
    console.log(det.key)
    div.innerHTML = det.key
})