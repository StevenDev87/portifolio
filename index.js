

console.log("button cliked")
let Portifoliobtn=document.getElementById('portifoliobtn')
let portifolio=document.getElementById('portifolio')

console.log(console.log(portifolio.style.display))

Portifoliobtn.addEventListener("mouseover", function(){
   
     portifolio.style.display="block"
} )


Portifoliobtn.addEventListener("mousedown", function(){
 
        portifolio.style.display="none"

} )


