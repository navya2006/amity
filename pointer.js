window.onload = function () {
    const trailer = document.getElementById("trailer");
};

const animateTrailer = (e, interacting, boxt) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  const act=document.getElementById("interactab");
  var keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`,
    height:`20px`,
    width:`20px`,
    borderRadius:"100%"
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
  const box= e.target.closest("#interactab"),
        boxt=box!== null;
  const icon = document.getElementById("trailer-icon");
  
  animateTrailer(e, interacting, boxt);
  
  trailer.dataset.type = interacting ? interactable.dataset.type : "";
  
  if(interacting) {
    icon.className = getTrailerClass(interactable.dataset.type);
  }
}