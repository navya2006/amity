window.onload = function () {
    const trailer = document.getElementById("trailer");
};
function getid(obj) {
  window.elem=(obj.id);
}
const animateTrailer = (e, interacting, boxt, nextbox) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  var act=document.getElementById(window.elem);
  var keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
    height:`20px`,
    width:`20px`,
    borderRadius:"0",
    backgroundColor:"transparent",
  }
  
  if (boxt){
    var idk=act.getBoundingClientRect().left
    var idk21=act.getBoundingClientRect().top
    var height=act.getBoundingClientRect().height
    var width=act.getBoundingClientRect().width
    var keyframes ={
      transform: `translate(${idk}px, ${idk21}px)`,
      height:`${height}px`,
      width:`${width}px`,
      borderRadius:"0px",
      backgroundColor:"#fff",
    }
  }
  else if(nextbox){
    var idk=act.getBoundingClientRect().left
    var idk21=act.getBoundingClientRect().top
    var height=act.getBoundingClientRect().height
    var width=act.getBoundingClientRect().width
    var keyframes ={
      transform: `translate(${idk}px, ${idk21}px)`,
      height:`${height}px`,
      width:`${width}px`,
      borderRadius:"0px",
      backgroundColor:"transparent",
    }
  }
  trailer.animate(keyframes, { 
    duration: 400, 
    fill: "forwards" 
  });
}

const getTrailerClass = type => {
  switch(type) {
    case "video":
      return "fa-solid fa-play";
    case "button":
        return "blank"
    default:
      return "fa-solid fa-arrow-up-right"; 
  }
}

window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
        interacting = interactable !== null;
  const box= e.target.closest(".interactab") ,
        boxt=box!== null;
  const nex= e.target.closest(".next-box"),
        nextbox=nex!== null;
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting, boxt, nextbox);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}

function hovfect(ye){
  var siu=ye.firstElementChild;
  siu.style.color="black";
  siu.style.cursor="default";
}
function gofect(ye){
  var siu=ye.firstElementChild;
  siu.style.color="white";
}