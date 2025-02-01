const myBtn = document.querySelector('#myBtn');
const nameInput = document.querySelector('#name');
const msg=document.querySelector('#msg')
function getRandomInt(min,max){
    return Math.floor(Math.random()* (max-min+1))+min;
}
let randomInt =getRandomInt(1,20);
console.log(randomInt)
let i= 0;

myBtn.addEventListener('click',()=>{
    i>=1;i++
    let text =nameInput.value
   
    if(text == randomInt){
 msg.textContent=`вы угадали за ${i} попыток `
 msg.classList.add="вы угадали"
    msg.classList=("color")

    }else{
        msg.textContent= "не угадал"
        msg.classList.add="не угадали"
    msg.classList=("color1")
    }
    
})