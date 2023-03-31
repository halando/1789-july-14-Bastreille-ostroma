let arrowRight=false;
let arrowLeft=false;
let arrowDown=false;
let arrowUp=false;
let worm = document.getElementById("worm");
let viz=0;
let fugg=0;
let m=50;
let x=0;
let y=0;
const sor2 =0;
const oszlop2 = 0;

let palyaSzelMax=Math.trunc((document.body.clientWidth*.8)/m)*m;
let palyaMagMax = Math.trunc((window.innerHeight*.8)/m)*m;

let tomb = [[]];



document.getElementById("palya").style.width=palyaSzelMax+"px";
document.getElementById("palya").style.height=palyaMagMax+"px";
document.getElementById("palya").style.top=(window.innerHeight*.1)+"px";

for (let i = 0; i < 5; i++) {
    let sor = Math.round(Math.random()*(palyaSzelMax/50));
    let oszlop = Math.round(Math.random()*(palyaMagMax/50));
   if(!tomb[sor]) tomb[sor] = [];

   let dinnye = document.createElement("div");
  dinnye.className = "dinnye";
  dinnye.style.left = oszlop*m+'px';
  dinnye.style.top = sor*m+'px';
  document.getElementById("palya").appendChild(dinnye);
  tomb[sor][oszlop] ="D";
  }
  console.log(tomb);
document.onkeydown= function(event){
    if (event.key=="ArrowRight")  {
        arrowRight=true;
        x=1; y=0;      }

    if (event.key=="ArrowLeft")  {
        arrowLeft=true;
        x=-1; y=0;     }
   
    if (event.key=="ArrowUp") {
        arrowUp=true;
        x=0; y=-1;     }

    if (event.key=="ArrowDown")  {
        arrowDown=true;
        y=1; x=0;    
    }  
    // console.log(event);
}

let idozito = setInterval(function(){
    
    oszlop2 += x;
    sor2 += y;
    console.log(sor2,", ",oszlop2);
    if(tomb[sor2] &&tomb[sor2][oszlop2] && tomb[sor2][oszlop2] == "D"){

        console.log("Dinnye!");
        tomb[sor2][oszlop2].parentElemen.removeChild(tomb[sor2][oszlop2]);
        // tomb[sor2][oszlop2] = null
    }
    viz+=m*x;
    fugg+=m*y;

    if (viz<0 || fugg<0 || viz>palyaSzelMax-m || fugg>palyaMagMax-m)
    {
        jatekVege(false);
        return;    }

    worm.style.left=viz+"px";
    worm.style.top=fugg+"px";
},500);

function jatekVege(end)
{
    if (!end)
    {
        console.log("Meghaltáál, te béna kukac!!!");
        clearInterval(idozito);
        document.onkeydown=null;
    }

}