const users = [
  {
    fullName: "Tuntun Singh",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=400&q=80",
    professional: "Front-End Developer",
    description: "Passionate about building clean, responsive UI and crafting seamless user experiences.",
    tags: ["JavaScript","React","CSS"]
  },
  {
    fullName: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80",
    professional: "Graphic Designer",
    description: "Creates eye-catching brand identities and creative visuals for clients.",
    tags: ["Photoshop","Illustrator","Branding"]
  },
  {
    fullName: "Santoshi Gupta",
    image: "https://images.unsplash.com/photo-1764017884266-b53a65cf0044?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    professional: "Backend Developer",
    description: "Enjoys solving complex problems and architecting robust backend systems.",
    tags: ["Node.js","MongoDB","API"]
  },
  {
    fullName: "Sneha Patel",
    image: "https://images.unsplash.com/photo-1763713382836-e2263bff42b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
    professional: "UI/UX Designer",
    description: "Designs user-friendly interfaces with strong emphasis on usability and accessibility.",
    tags: ["Figma","Wireframing","Prototyping"]
  },
  {
    fullName: "Aman Verma",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    professional: "Full-Stack Developer",
    description: "Works on both client and server sides to build complete web solutions end to end.",
    tags: ["JavaScript","Express","SQL"]
  }
];


sum = ''
users.forEach(function(elem){
        sum = sum + `
                <div id="card">
                <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.professional}</h4>
            <p>${elem.description}</p>
        </div>` 
        console.log(sum)
})

var main = document.querySelector('main')
main.innerHTML = sum





















// var arr = [10,20,30,40,50]
// var sum = 0

// arr.forEach(function(elem){
//   console.log(elem) 
//   sum = sum + elem 
// })
// console.log(sum)








// forEach() is a looping method used to run a function for each element in an array.

// array.forEach(function(value, index, array) {
//     // code
// });
