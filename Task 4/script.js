var btn = document.querySelector('button')
var main = document.querySelector('main')

var sar = [
  "Coding hard, wallet empty.",
  "I debug for food.",
  "Salary? Still compiling.",
  "Living on chai and errors.",
  "Broke but can code… kinda.",
  "Dreams high, balance low.",
  "Laptop rich, pocket poor.",
  "Money? 404 not found.",
  "Code works, bank doesn’t.",
  "Bugs: unlimited. Budget: limited.",
  "My wallet has no dependencies.",
  "Coding for exposure, not money.",
  "Payday feels like a rumor.",
  "Learning to code, forgetting to eat.",
  "Keyboard rich, life broke.",
  "Coding all day, broke all year.",
  "Hoping code pays rent one day.",
  "Sleep: no. Money: no. Code: kinda.",
  "Programmer by passion, beggar by budget.",
  "Code now, get rich… never?",
    "Coding all day, broke all year.",
  "Skills high, wallet low.",
  "Debugging life and losing.",
  "Code runs, money doesn’t.",
  "Laptop rich, bank account empty.",
  "I fix bugs, but not my finances.",
  "Chai-powered, cash-starved.",
  "Dreaming in code, broke in reality.",
  "Payday feels like mythology.",
  "Code is sharp, budget is flatlined.",
  "Poverty level: Full Stack.",
  "Big goals, tiny balance.",
  "Learning new tech, earning no cash.",
  "Bill gates? I'm just bill paying.",
  "Only thing growing is my debt.",
  "Future rich, currently fictional.",
  "Every bug delays my fortune.",
  "Hustling in code, struggling in life.",
  "Balance: negative. Attitude: sarcastic.",
  "Broke today, broke tomorrow, still coding."
];


btn.addEventListener('click',function(){

    var h1 = document.createElement('h1')
    
    var top = Math.floor(Math.random()*80)
    var left = Math.floor(Math.random()*80)
    var scale = Math.floor(Math.random()*3)
    var deg = Math.floor(Math.random()*360)
    var a = Math.floor(Math.random()*sar.length)

    console.log(a)
    h1.innerHTML = sar[a]
    h1.style.color = 'white'
    h1.style.position = 'absolute'
    h1.style.top = top+'vh' 
    h1.style.left = left+'vw'
    h1.style.rotate = deg+'deg'
    h1.style.scale = scale

    main.appendChild(h1)

})
