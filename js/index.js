function clickEventHandler(event) {
    event.preventDefault()
    console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    console.log(event.target)
    console.log(event.currentTarget);
  }

homeLink.addEventListener( 'click', clickEventHandler)
document.querySelector('nav').addEventListener('click',clickEventHandler)
document.querySelector('.main-navigation').addEventListener('click', clickEventHandler)
document.body.addEventListener('click', clickEventHandler)
document.addEventListener('click', clickEventHandler)
window.addEventListener('click', clickEventHandler)
document.querySelector('header'),addEventListener('click', clickEventHandler, {capture:true })

function clickyclicky(event) {
    document.body.innerHTML = '<img id="haha" src="img/giphy (1).gif" alt="everything burns">'
}

clickyLink.addEventListener( 'click', clickyclicky)


const busImage = document.querySelector(".bus")
console.log(busImage)

busImage.addEventListener("mouseenter", () => {
    busImage.style.transform = "scale(1.4)";
    busImage.style.transition = "transform 1s";
})
busImage.addEventListener("mouseleave", () => {
    busImage.style.transform = "scale(1)";
  })



  document.querySelectorAll(".content-destination").forEach(el => {
    el.addEventListener("click", function(event) {
      console.log(event)
      event.stopPropagation();
      el.style.color= "limegreen";
    })
  })


  let bColor = document.querySelector(".btn");
  bColor.addEventListener("click", event => event 
  .target.style.backgroundColor = "green")
  
  let bColor1 = document.querySelector(".btn1");
  bColor1.addEventListener("click", event => event 
  .target.style.backgroundColor = "hotPink")

  let bColor2 = document.querySelector(".btn2");
  bColor2.addEventListener("click", event => event 
  .target.style.backgroundColor = "orange")