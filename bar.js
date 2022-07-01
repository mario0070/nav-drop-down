var button=document.querySelector(".button")
var bar=document.querySelector(".navbar")
var container=document.querySelector(".page")
var last=document.querySelector(".last")

button.addEventListener("click", () =>{
    // bar.classList.toggle("active-nav")
    // container.classList.toggle("acive-cont")
    console.log("clicked")
    bar.classList.toggle("valid")
    container.classList.toggle("valid")
    last.classList.toggle("valid")
})

var service=document.querySelector(".dropdowns")
var none=document.querySelector(".none")


service.addEventListener("click",() =>{
    none.classList.toggle("valid")
})
 