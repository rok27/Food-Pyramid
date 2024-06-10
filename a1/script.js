var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var c6 = 0;

document.getElementById("counter1").innerHTML=c1;
document.getElementById("counter2").innerHTML=c2;
document.getElementById("counter3").innerHTML=c3;
document.getElementById("counter4").innerHTML=c4;
document.getElementById("counter5").innerHTML=c5;
document.getElementById("counter6").innerHTML=c6;

function show1(){
    document.getElementById("L1").className="showButton";
}
function hide1(){
    document.getElementById("L1").className="hideButton";
}
function c1Plus(){
    c1++;
    document.getElementById("counter1").innerHTML=c1;
}
function c1Minus(){
    c1--;
    document.getElementById("counter1").innerHTML=c1;
}


function show2(){
    document.getElementById("L2").className="showButton";
}
function hide2(){
    document.getElementById("L2").className="hideButton";
}
function c2Plus(){
    c2++;
    document.getElementById("counter2").innerHTML=c2;
}
function c2Minus(){
    c2--;
    document.getElementById("counter2").innerHTML=c2;
}

function show3(){
    document.getElementById("L3").className="showButton";
}
function hide3(){
    document.getElementById("L3").className="hideButton";
}
function c3Plus(){
    c3++;
    document.getElementById("counter3").innerHTML=c3;
}
function c3Minus(){
    c3--;
    document.getElementById("counter3").innerHTML=c3;
}


function show4(){
    document.getElementById("L4").className="showButton";
}
function hide4(){
    document.getElementById("L4").className="hideButton";
}
function c4Plus(){
    c4++;
    document.getElementById("counter4").innerHTML=c4;
}
function c4Minus(){
    c4--;
    document.getElementById("counter4").innerHTML=c4;
}

function show5(){
    document.getElementById("L5").className="showButton";
}
function hide5(){
    document.getElementById("L5").className="hideButton";
}
function c5Plus(){
    c5++;
    document.getElementById("counter5").innerHTML=c5;
}
function c5Minus(){
    c5--;
    document.getElementById("counter5").innerHTML=c5;
}

function show6(){
    document.getElementById("L6").className="showButton";
}
function hide6(){
    document.getElementById("L6").className="hideButton";
}
function c6Plus(){
    c6++;
    document.getElementById("counter6").innerHTML=c6;
}
function c6Minus(){
    c6--;
    document.getElementById("counter6").innerHTML=c6;
}
