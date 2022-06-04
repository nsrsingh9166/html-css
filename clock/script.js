function timer()
{
    const date=new Date()
    const sec=date.getSeconds()
    const min=date.getMinutes()
    const hr=date.getHours()
    const day=date.getDay();
    const mon=date.getMonth()
    const yr = date.getFullYear();
    const dt= date.getDate()
    document.getElementById('hour').innerHTML=hr;
    document.getElementById('min').innerHTML=min;
    if(sec<=9)
    document.getElementById('sec').innerHTML='0'+sec;
    else
    document.getElementById('sec').innerHTML=sec;
    document.getElementById('day').innerHTML=(getday(day)+" ");
    document.getElementById('date').innerHTML=dt;
    document.getElementById('mon').innerHTML=getMon(mon);
    document.getElementById('year').innerHTML=yr;
    setTimeout("timer()",10)
}
timer();
function getday(a)
{
    const day=["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"]
    return(day[a])
}
function getMon(a)
{
   const mon=["Jan","Feb","Mar","Apr","may","Jun","July","Aug","Sep","Oct","Nov","Dec"]
    return(mon[a])
}