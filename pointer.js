window.onload = function () {
    const trailer = document.getElementById("trailer");
};

const animateTrailer = (e, interacting, boxt) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  const act=document.getElementById("interactab")
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
  }
  if (boxt){
    top=act.getBoundingClientRect().top;
    left=act.getBoundingClientRect().left;
    right=act.getBoundingClientRect().right;
    bottom=act.getBoundingClientRect().bottom;
    console.log(act.getBoundingClientRect());
    const keyframes ={
        
        transform:`translate(${top}px)`
    }
  }
  trailer.animate(keyframes, { 
    duration: 600, 
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
  const box= e.target.closest(".interactab"),
        boxt=box!== null;
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting, boxt);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}