var grow = 0
var btn = document.querySelector('button')
var h1 = document.querySelector('#bottom h1')
var inside = document.querySelector('#inside')

btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'

    var num = 50 + Math.floor(Math.random()*100)
    
    var int = setInterval(() => {
        grow++
        h1.innerHTML = grow+"%"
        inside.style.width = grow+"%"
    },num);
    
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML ="Downloaded"
        btn.style.opacity = 0.5
    },num*100);
    console.log(`Downlaod complete in ${num/10}`)
})
