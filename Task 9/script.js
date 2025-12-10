 var btn = document.querySelectorAll('button')

 btn.forEach(function(elem,indx)
{
    elem.addEventListener('click',function(){
        if(elem.innerHTML == "Add Friend"){
            console.log(indx)
            elem.innerHTML = "Remove Friend"
            elem.style.backgroundColor = 'red'
        }
        else{
            elem.innerHTML ="Add Friend"
            elem.style.backgroundColor = '#9eadff'
        }
    })
})
