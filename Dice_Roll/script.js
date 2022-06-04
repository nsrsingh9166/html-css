const btn=document.querySelector('.btn')
const arr=['\u2680','\u2681','\u2682','\u2683','\u2684','\u2685'];
function randomDice()
{
    let val=Math.floor((Math.random()*(6)));
    return val;
}
const result=document.querySelector('button')
console.log(Roll())
function Roll()
{
    document.getElementById('dice').innerHTML=arr[randomDice()]
}
btn.addEventListener("click",Roll)