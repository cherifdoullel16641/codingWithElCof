// PARLONS DES SELECTEURS MON AMI!!!!
// document.querySelector('h4').style.background = "yellow";

// const baliseHTML = document.querySelector("h4");
// console.log(baliseHTML);
// baliseHTML.style.background = "green";
 // CLICK EVENT
 const questioncontainer = document.querySelector(".click-eventbox");
 const btn1 = document.querySelector("#btn-1");
 const btn2 = document.querySelector("#btn-2");
 const response = document.querySelector("p");

 console.log(btn1,btn2);
// questioncontainer.style.borderRadius = "150px";
questioncontainer.addEventListener("click",() => {
    questioncontainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click",() => {
    response.classList.add("show-response");
    response.style.background = "green";
});
btn2.addEventListener("click",() => {
    response.classList.add("show-response");
    response.style.background = "red";
});

// les  priorités en CSS; div --> #id --> .class baliseHTML
// si vous injecter une classe à un style qui est id ça ne marchera pas !!!
// PASSONS AU MOUSE EVENTS !!!!!
//quand un element à deux fois la meme propriete css la premiere sera ecraseé et seulement la deuxieme restera!!!!
const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove",(e) => {
    mousemove.style.left = e.pageX +"px";
    mousemove.style.top = e.pageY +"px";
});

window.addEventListener("mousedown",() => {
    mousemove.style.transform = "scale(2) translate (-25%,-25%)";
});

window.addEventListener("mouseup",() => {
    mousemove.style.transform = "scale(1) translate (-50%,-50%)";
    mousemove.style.border = "2px soloid teal";
});

questioncontainer.addEventListener("mouseenter",() =>{
    questioncontainer.style.background = "rgba(0,0,0,0.6)";
    // mouse enter aussi quand je clique sur le cercle et curseur on ne change pas la couleur????
});

questioncontainer.addEventListener("mouseout", () => {
    questioncontainer.style.background = "blue";
});

response.addEventListener("mouseover", () => {
    response.style.transform = "rotate(15deg)";
});
 // ----------------------------------------------- //

 // KAY PRESS EVANTS

 const keypresscontainer = document.querySelector(".keypress-box");
 const key = document.getElementById("key");

 document.addEventListener("keypress" , (e) => {
    key.textContent = e.key;
    if (e.key === "g") {
        keypresscontainer.style.background = "green";
    }else if (e.key==="y"){
        keypresscontainer.style.background = "yellow";       
    }else{
        keypresscontainer.style.background = "red"; 
    }
    ring();
 });

 const ring = () =>{
    const audio = new Audio();
    audio.src = "audio.mp3";
    audio.play();
 };

//------------------------------------------------//
// SCROLL EVENT
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    console.log(window.scrollY);
    if (window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

//---------------------------------------------------//

// FORM EVENTS
 
const inputname = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputname.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
});

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    if (cgv.checked) {   
        // Pour les check box on'a pas besoin de declarer une variable!!!
        document.querySelector('form > div').innerHTML = `
 
        <h3>pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language} </h4>

    `; 
    // j'arrive pas à afficher le contenu de h3 et h2????

    }else{
        alert("Veillez accepter les CGV");
    }

});
//---------------------------------//
// LOAD EVENT

//  Window.addEventListener("load", () =>{
//     console.log("document chargé!!!");
//  });



