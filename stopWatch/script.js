let cnt=0
let hour=0
let min=0
let sec=0
let minisec=0
let timer=false
let dsec=''
let dmin=''
let dhr=''
function start()
{
timer=true
stopWatch()
}
function stop()
{
    timer=false
    sec=0
    min=0
    cnt=0

}
function reset()
{
    cnt=0
    timer=false
    sec=0
    min=0

}
function stopWatch()
{

    if(timer==true)
    {
        cnt+=1
        if(cnt==60)
        {
            cnt=0
            sec+=1
            if(sec<=9)
            {
            dsec='0'+sec
            document.getElementById('sec').textContent=dsec
            }
            else{
            document.getElementById('sec').textContent=sec
            }
        }
        if(sec==60)
        {
            min+=1
            sec=0
            if(min<=9)
            {
                dmin='0'+min
                document.getElementById('min').textContent=dmin
            }
            else
            {
                document.getElementById('min').textContent=min
            }
        }
      
    }
    setTimeout('stopWatch()',10) 
}