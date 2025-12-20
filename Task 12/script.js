const p = document.querySelector('p')
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklnopqrstuvwxyz";
const text = p.innerText

let ilteration = 0

p.addEventListener('mouseenter',()=>{

  function randomtext() {  
      const str = text.split('').map((char,idx)=>{
    if(idx<ilteration){
        return char
    }
        return character.split('')[Math.floor(Math.random()*53)]
        }).join("")
    console.log(str)
    p.innerText = str
    ilteration +=0.5
    
}
   

setInterval(randomtext,30)


})
