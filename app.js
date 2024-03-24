let count = document.querySelector(".count")
let start = document.querySelector(".start")
let stop = document.querySelector(".stop")
let smins = 5;
let totaltimes = smins * 60;
let timeInterval ;
let cd;
function countdown(){
  let  minutes = Math.floor(totaltimes / 60);
  let seconds = totaltimes % 60;
 count.innerHTML = `${minutes}m:${seconds}s`
  totaltimes--;
  if(totaltimes < 0 ){
    clearInterval(cd)
  }
}
start.addEventListener("click",()=>{
cd = setInterval(countdown,1000);
})
stop.addEventListener("click",()=>{
  clearInterval(cd);
})

