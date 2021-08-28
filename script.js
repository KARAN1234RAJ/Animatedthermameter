const tempload= ()=>{
     let temp = document.getElementById('temp');
     temp.innerHTML='&#xf2cb';
     temp.style.color="#00FF00";
    

     setTimeout(()=>{
          temp.innerHTML='&#xf2ca'; 
          temp.style.color="#ffff4d"
          
     },1000)
     setTimeout(()=>{
          temp.innerHTML='&#xf2c9'; 
          temp.style.color="#ffff00"
     },2000)
     setTimeout(()=>{
          temp.innerHTML='&#xf2c8'; 
          temp.style.color="#ff4500"
     },3000)
     setTimeout(()=>{
          temp.innerHTML='&#xf2c7'; 
          temp.style.color="#b30000"
     },4000)
}

tempload()
setInterval(tempload,5000)