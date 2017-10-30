var bird;
var px = 60;
var py = 150;
var vy = 0;
var vx = -4;
var pg = 0.5;
var vclick=-10;
var pipe1;
var pipe2;
var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var pipe1;
var pipe2;
var pipe1x=100;
var pipe2x=300;
var width = 300;
var maxW= 343;
var maxH= 480;
var pW=85;
var pH=29;
var diff=100;
var upbound=[0,0];
var lowbound=[425,425];
function init() {
    document.getElementById('start').style.display="none";
    document.getElementById('head').style.display="none";    
    document.getElementById('pipe_up1').style.display="inline";
    document.getElementById('pipe_up_fill1').style.display="inline";    
    document.getElementById('pipe_down1').style.display="inline";
    document.getElementById('pipe_down_fill1').style.display="inline";     
    document.getElementById('pipe_up2').style.display="inline";
    document.getElementById('pipe_up_fill2').style.display="inline";
    document.getElementById('pipe_down2').style.display="inline";
    document.getElementById('pipe_down_fill2').style.display="inline"; 
    document.addEventListener('click', birdJump)
    check(); 
}
function birdJump()
{
    vy=vclick;
}
function check()
{
    bird = document.getElementById('flybird');
    a=document.getElementById('pipe_up1');
    b=document.getElementById('pipe_up_fill1');
    c=document.getElementById('pipe_down1');
    d=document.getElementById('pipe_down_fill1');
    e=document.getElementById('pipe_up2');
    f=document.getElementById('pipe_up_fill2');
    g=document.getElementById('pipe_down2');
    h=document.getElementById('pipe_down_fill2');
  if(bird && a && b && c && d && e && f && g && h){
        bird.style.left="60px";
        bird.style.top="150px";
        setInterval(play,30);
        pipe1=[a,b,c,d];
        pipe2=[e,f,g,h];
        for(var i=0;i<4;i++){
            pipe1[i].style.left=pipe1x+'px';
            pipe2[i].style.left=pipe2x+'px';
        }
    }
    else{
        setTimeout(check, 100);
    }
}
function play()
{
    py=py+vy;
    vy=vy+pg;
    pipe1x=pipe1x+vx;
    pipe2x=pipe2x+vx;
    bird.style.left= px + 'px';
    bird.style.top = py + 'px';
    for(var i=0;i<4;i++){
        pipe1[i].style.left=pipe1x+'px';
        pipe2[i].style.left=pipe2x+'px';
    }
    checkPosition();
    updatePipe();
}
function checkPosition()
{
    if (py<0 || py >395 || pipePosition() )
    {
        gameOver();

    }
    if(pipe1x<60 && pipe1x>0)
    {
        console.log("a"+parseInt(pipe1[0].style.height,10));
        if( py < upbound[0]){gameOver();}
        if( py >lowbound[0]){gameOver();}
    }
    if(pipe2x<60 && pipe2x>0)
    {
        console.log("b");
        if( py < upbound[1]){gameOver();}
        if( py > lowbound[1]){gameOver();}
    }
}

function updatePipe()
{
    /*x axis y axis*/
    if(pipe1x<-60){
        pipe1x=343;
        updateY(pipe1,0);
    }
    if(pipe2x<-60){
        pipe2x=343;
        updateY(pipe2,1);
    }
    for(var i =0;i<4;i++){
        if( (parseInt(pipe1[i].style.left,10)+pW) > maxW){
            pipe1[i].style.width=maxW-parseInt(pipe1[i].style.left,10)+'px';
        }
    }
    
    for(var i =0;i<4;i++){
        if( (parseInt(pipe2[i].style.left,10)+pW) > maxW){
            pipe2[i].style.width=maxW-parseInt(pipe2[i].style.left,10)+'px';
        }
    }
}
function updateY(pipe,index)
{
    let alpha = Math.floor(Math.random() * (301-diff));
    pipe[1].style.height=2+alpha+'px';
    pipe[0].style.top=2+alpha+'px';
    pipe[2].style.top=62+alpha+diff+'px';
    pipe[3].style.top=122+alpha+diff+'px';
    pipe[3].style.height=303-alpha-diff+'px';
    upbound[index]=62+alpha;
    lowbound[index]=62+alpha+diff;
}
function gameOver()
{
    pg=0;
    vy=0;
    vx=0;
    vclick=0;
    console.log("game over");
;
}
function pipePosition()
{
    return false;
}