var botones=["7", "8", "9", "+", "4", "5", "6", "-", "1", "2", "3", "*", "0", "C", "=", "/"] ;
var reset =document.getElementById('reset');
let count=1;
    let count2=0;
function renderizar(){
const divCalculadora= document.createElement("div");
divCalculadora.setAttribute("id","calculadora");
divCalculadora.setAttribute("class","text-center");
divCalculadora.setAttribute("style", "width:50%; margin:0 auto;")
document.body.appendChild(divCalculadora);


const divPantalla=document.createElement("div");
divPantalla.setAttribute("id","divPantalla");

divCalculadora.appendChild(divPantalla);

const Pantalla=document.createElement("input");
Pantalla.setAttribute("id","Pantalla");
Pantalla.setAttribute("type","text");
Pantalla.setAttribute("value","0");
Pantalla.setAttribute("disable","true");
Pantalla.setAttribute("class","form-control text-right")
divPantalla.appendChild(Pantalla);





const divBotones=document.createElement("div");
divBotones.setAttribute("id","botones");
divCalculadora.appendChild(divBotones);
for (let i=0;i<botones.length;i++){
  if(i%4==0){
    const divFila=document.createElement("div");
    divFila.setAttribute("clase","row");
    divBotones.appendChild(divFila);
  }

    let boton=document.createElement("button");
    boton.setAttribute("id","boton"+botones[i]);
    boton.setAttribute("class","btn btn-warning col-3 border-success");
    
    boton.innerHTML=botones[i];
    
    boton.addEventListener("click",function(){
        procesarEvento(boton);
    })



    divBotones.lastChild.appendChild(boton);
    
    }


}

function procesarEvento(boton){
    let miPantalla=document.getElementById("Pantalla");
    
    
    if(boton.innerHTML!="="){
        if(count==0){
            console.log('hola'); 
            miPantalla.value=reset;   
        }
        miPantalla.value+=boton.innerHTML;
        count =count+1;
        console.log(count);
    }else{
        let resultado=math.evaluate(miPantalla.value);
       miPantalla.value=resultado;
       count=0;
        
    }
    if(count==10){
        miPantalla.value=reset;
    }
    if(boton.innerHTML=="C"){
        miPantalla.value=reset;
    }

    

}

renderizar();