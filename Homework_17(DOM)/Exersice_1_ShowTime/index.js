let ShowTimeBtn=document.querySelector('.show-time')
let ShowTime=document.querySelector('.time')

ShowTimeBtn.addEventListener('click',()=>{
    ShowTime.innerHTML=Date();
   })
