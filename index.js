const di = document.getElementById("box");

di.addEventListener("mouseover", () =>{
    const left = Math.floor(Math.random()* 92);
    const top = Math.floor(Math.random()* 81);
    di.style.left = left + "vw";
    di.style.top = top + "vh";
})

di.addEventListener("mouseClick", ()=>{
    const h1 = document.createElement("h1");
    h1.innerText = "Congratulations you are really fast";
    document.body.appendChild(h1);
})