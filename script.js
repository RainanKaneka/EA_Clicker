let cookie = document.getElementById("Cookie")


let displayCookies = document.getElementById("displayCookies")

cookie.addEventListener("click", cookieClicked)




let a = " Essencias Azuis"

let x = 1

let y = 1

let cookies = 0

let multiplier = 1

let multiplier2 = 0

let multiplier3 = 0

let multclick = 1

let click = 1

let price = 50 + (Math.round(1.5 * multiplier*multiplier)-2)

let price2 = 5000 + (Math.round(50 * x*x) -50)

let price3 = 10000 + (Math.round(100 * y*y) -100)

let pricearm1 = 500 + (Math.round(5.72 * multclick*multclick) -6)

let qnthex1 = 1 - 1

let qnthex2 = 1 - 1

let qnthex3 = 1 - 1

let qntarm1 = 1 - 1









//////////////////////Essencia Azul por Click/////////////////////////////////////////////

function cookieClicked(){
    cookies = cookies + click
    displayCookiesquantidade()

}

///////////////////Numero de Clicks////////////////////////////////////////

function displayCookiesquantidade(){
displayCookies.innerHTML = (cookies + a)
}


///////////////////Máquinas Hextech//////////////////////////////////////////////////////////

let hextechM = document.getElementById("hextech1")
     hextechM.innerText = ("Hextech Machine:" + qnthex1 + "\n" + price + " EA")

let hextechM2 = document.getElementById("hextech2")
    hextechM2.innerText = ("Hextech Machine II: " + qnthex2 + "\n" + price2 + " EA" )

let hextechM3 = document.getElementById("hextech3")
    hextechM3.innerText = ("Hextech Machine III: " + qnthex3 + "\n" + price3 + " EA" )

    hextechM.addEventListener("click", hextechMachine)
    
    hextechM2.addEventListener("click", hextechMachine2)  
    
    hextechM3.addEventListener("click", hextechMachine3)



function hextechMachine(){
    if (cookies >= price){
        multiplier++
        qnthex1++
        qnteps.innerHTML = (multiplier + multiplier2 + multiplier3 + " EPS")
        cookies = cookies - price
        displayCookiesquantidade()
        price = 50 + (Math.round(1.5 * multiplier*multiplier))
        hextechM.innerText = ("Hextech Machine: " + qnthex1 + "\n" + price + " EA")}
    }

 

function hextechMachine2(){
   if(cookies >= price2){
    multiplier2+= 30
    qnthex2++
    x++
    qnteps.innerHTML = (multiplier + multiplier2 + multiplier3 + " EPS")
    cookies = cookies - price2
    displayCookiesquantidade()
    price2 = 5000 + (Math.round(53.50 * x*x))
    hextechM2.innerText = ("Hextech Machine II: " + qnthex2 + "\n" + price2 + " EA")
}
}

function hextechMachine3(){
    if(cookies >= price3){
     multiplier3+= 60
     qnthex3++
     y++
     qnteps.innerHTML = (multiplier + multiplier2 + multiplier3 + " EPS")
     cookies = cookies - price3
     displayCookiesquantidade()
     price3 = 10000 + (Math.round(112.5 * y*y))
     hextechM3.innerText = ("Hextech Machine III: " + qnthex3 + "\n" + price3 + " EA")
 }

 
}

//////////Braços Robóticos//////////////

let braco1 = document.getElementById("roboticarm1")
braco1.innerText = ("Braço Robótico: " + qntarm1 + "\n" + pricearm1 + " EA")

    braco1.addEventListener("click", bracorobotico)

    function bracorobotico(){
        if(cookies >= pricearm1 ){
            click++
            multclick++
            qntarm1++
            qnteps.innerHTML = (multiplier + multiplier2 + multiplier3 + " EPS")
            cookies = cookies - pricearm1
            displayCookiesquantidade()
            pricearm1 = 500 + (Math.round(5.72 * multclick*multclick) )
            console.log("abacate")
            braco1.innerText = ("Braço Robótico: " + qntarm1 + "\n" + pricearm1 + " EA")
        } 
    }

///////////////////Essencia Azul por Segundo////////////////////////////////////////////////////
   
   
let EPS = document.getElementById("eps")

function eps(){
cookies = cookies + multiplier + multiplier2 + multiplier3
displayCookiesquantidade()
}


let cps = 0
setInterval(eps, 1000)

let qnteps = document.getElementById("quantoganha")
qnteps.innerHTML = (multiplier + multiplier2 + multiplier3 + " EPS")

////////////////////////////////////////////////////////////////////////////////////////////////