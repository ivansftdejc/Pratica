//Manipulção por Id: getElementById
const Elemento_Id= document.getElementById('Manipulação_Id'); 
console.log(Elemento_Id);
//Manipulação por Classe: getElementByClassName
const Elemento_Class=document.getElementsByClassName('mt-2');
console.log(Elemento_Class)

//Manipulação por Tag: getElementByTagName
let Elementos_Tag= document.getElementsByTagName("h2");
let Elemento_Tag=Elementos_Tag[1];
console.log(Elemento_Tag);

//Criação da função Alteração do HTML
const Título= document.getElementById('título');
const Subtítulo=document.getElementById('subtítulo');
function alterarHtml(){
    Título.textContent="Título 1";
    Título.style.fontFamily="Segoe";
    Título.style.fontSize="100px";
}

