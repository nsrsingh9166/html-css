myFocus()
function dispOn(val)
{
    if(val=='.')
    {
        let c=countDot(document.getElementById('disp').value);
        if(c>=1)
        val='';
    }
    if(document.getElementById('disp').value=='0' && (val=='*' || val=='+'||val=='*'||val=='-'||val=='/'))
    document.getElementById('disp').value='0';
//     if(document.getElementById('disp').value[document.getElementById('disp').value.length
// -1]=='+')
// document.getElementById("disp").value=val;
    else if(document.getElementById('disp').value==='0')
    document.getElementById("disp").value=val;
    else
    document.getElementById("disp").value+=val;
    
   
}
function clr()
{
    document.getElementById('disp').value=0;
}
function square()
{
    let c=document.getElementById('disp').value
    const v=c*c;
    document.getElementById('disp').value=v;
}
function Eval()
{
    const c=document.getElementById('disp').value;
    let y=eval(c);
    document.getElementById('disp').value=y;
    

}
function backsp()
{
    let c= document.getElementById('disp').value;
    let d= c.length;
    document.getElementById('disp').value=(c.substring(0,d-1));
}
function divideByOne()
{
    let c= document.getElementById('disp').value;
    let n=parseFloat(c)
    n=1/n;
    document.getElementById('disp').value=n
}
function myFocus()
{
    document.getElementById('equal').focus()
    document.getElementById('equal').style.color="black";
    document.getElementById('equal').style.backgroundColor="#3f799d";
}
function plusMinus()
{
    let c= document.getElementById('disp').value;
    let val=parseInt(c);
    val=-val;
    document.getElementById('disp').value=val
}
function countDot(str)
{
    let c=0;
    for(let i=0;i<str.length;i++)
    {
        if(str[i]=='.')
        c++;
    }
    return(c);
}
function cube()
{
    let c= document.getElementById('disp').value
    const cube=c*c*c
    document.getElementById('disp').value=cube;
}