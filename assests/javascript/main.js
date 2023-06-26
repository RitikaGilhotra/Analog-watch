let hour= document.querySelector(".hour");
let mint=document.querySelector(".mint");
let sec=document.querySelector(".sec");
console.log("hi")
setInterval(()=>{
    abc= new Date();
    let hourcu = abc.getHours();
    let mintcu = abc.getMinutes();
    let seccu = abc.getSeconds();
    let hourrotation= 30*hourcu + mintcu/2;
    let mintrotation= 6*mintcu;
    let secroation= 6*seccu;
    hour.style.rotate = `${hourrotation}deg`;
    mint.style.rotate = `${mintrotation}deg`;
    sec.style.rotate = `${secroation}deg`;
    

},1000)