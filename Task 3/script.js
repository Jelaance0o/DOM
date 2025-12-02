var btn = document.querySelector('button')
var box = document.querySelector('#box')
var body = document.querySelector('body')
var hname = document.querySelector('#name')
var h2name = document.querySelector('#superpower')
var h3name = document.querySelector('#mainWeapon')

var Marvel =[
    {
        name:"Iron Man",
        superpower:"Power Armor suit",
        mainWeapon:"Iron Man armor",
        primary:"#871A44",
        secondary:"#BFA469"
    },
      {
    name: "Captain America",
    superpower: "Super-soldier strength",
    mainWeapon: "Vibranium shield",
    primary:"#B82735",
    secondary:"#254A9A"
  },
  {
    name: "Thor",
    superpower: "God of Thunder",
    mainWeapon: "Stormbreaker",
    primary:"#256081",
    secondary:"gold"
  },
  {
    name: "Black Panther",
    superpower: "Vibranium suit",
    mainWeapon: "Vibranium suit",
    primary:"#8702fcff",
    secondary:"#000"
  },
  {
    name: "Spider-Man",
    superpower: "Spider sense,agility",
    mainWeapon: "Web-shooters",
    primary:"#295984",
    secondary:"#E2252C"
  }
];

btn.addEventListener('click',function(){

  var change = Marvel[Math.floor(Math.random()*Marvel.length)]
  
  box.style.backgroundColor = change.primary
  body.style.backgroundColor = change.secondary

  hname.innerHTML = change.name
  h2name.innerHTML = change.superpower
  h3name.innerHTML = change.mainWeapon
  console.log(change)
    
})