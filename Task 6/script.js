var img = document.querySelector('img')
var love = document.querySelector('#love')

img.addEventListener('dblclick',function(){
    love.style.opacity = 1
    love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'

    setTimeout(() => {
        love.style.transform ='translate(-50%,-300%) scale(1)rotate(-60deg)'       
    }, 300);
    
    setTimeout(() => {
        love.style.opacity = 0       
    }, 400);

    setTimeout(() => {
        love.style.transform ='translate(-50%,-50%) scale(0)rotate(0deg)'       
    }, 500);
})