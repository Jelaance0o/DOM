var btn = document.querySelector('button')
var box = document.querySelector('#box')
var body = document.querySelector('body')

var Marvel =[
    {
        name:"Iron Man",
        superpower:"Power Armor suit",
        mainWeapon:"Iron Man armor",
         
    },
      {
    name: "Captain America",
    superpower: "Super-soldier strength",
    mainWeapon: "Vibranium shield"
  },
  {
    name: "Thor",
    superpower: "God of Thunder, control over lightning",
    mainWeapon: "Stormbreaker / originally Mjolnir"
  },
  {
    name: "Black Panther",
    superpower: "Vibranium suit",
    mainWeapon: "Claws in Vibranium suit"
  },
  {
    name: "Spider-Man",
    superpower: "Spider sense,agility",
    mainWeapon: "Web-shooters"
  }
];


btn.addEventListener('click',function(){
    var ran = Math.floor(Math.random()*256)
    var ran2 = Math.floor(Math.random()*256)
    var ran3 = Math.floor(Math.random()*256)
    console.log(ran,ran2,ran3)

    var bran = Math.floor(Math.random()*256)
    var bran2 = Math.floor(Math.random()*256)
    var bran3 = Math.floor(Math.random()*256)
    console.log(bran,bran2,bran3)
    box.style.backgroundColor =`rgb(${ran},${ran2},${ran3})`
    body.style.backgroundColor =`rgb(${bran},${bran2},${bran3})`
})