const days=document.querySelector("#days");
const hours=document.querySelector("#hours");
const minutes=document.querySelector("#minutes");
const seconds=document.querySelector("#seconds");

//const currentYear=new Date().getFullYear();

function UpdateTime(){
  const currentDate=new Date();
  const birthYear=new Date(`11 oct ${currentYear+1} 00:00:00`);

  //const birthYear=new Date(birthdate);

  const diff=currentDate-birthYear;
  const d=Math.floor(diff/1000/60/60/24);
  const h=Math.floor((diff/1000/60/60)%24);
  const m=Math.floor((diff/1000/60)%60);
  const s=Math.floor((diff/1000)%60);
  const ms=Math.floor(diff%1000);

  days.innerHTML=d<10?+d:d;
  hours.innerHTML=h<10?+h:h;
  minutes.innerHTML=m<10?+m:m;
  seconds.innerHTML=s<10?+s:s;
  
}
setInterval(UpdateTime,1000);