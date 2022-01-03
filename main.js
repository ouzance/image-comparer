const divider = document.querySelector(".divider");
const renkli = document.querySelector(".renkli");
const renksiz = document.querySelector(".renksiz");

let x = -1

document.onmousemove = function(event){
    x = event.pageX;

    setDividerPosition(x);

    renkli.style.width = x+"px";
}

function setDividerPosition(x){
    divider.style.left = x+"px"
}