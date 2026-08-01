
let btn =document.querySelector(".btn");

btn.addEventListener("click",function(){

      let colors =["red","green","blue","pink","purple","yellow","black"];

      let randomIndex = Math.floor(Math.random()*7);

      document.body.style.backgroundColor = colors[randomIndex];
})