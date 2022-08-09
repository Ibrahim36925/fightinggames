// // swal("Hello Ibrahim");
function player1() {
    swal("Player 1 Keys!", "Forward = Right Key \n Back = Left Key \n Down = Down Key  \n Jump = Up Key \n Extra power = E \n Bukka = B \n Power = P");
}
function player2() {
    swal("Player 2 Keys!", "Forward = 4 \n Back = 6 \n Jump = 2 \n Kick&Bukka = z \n Power = v \n ExtraPower = Q");
}
// document.images.style.width = 200 + "px" 
var num1 = document.getElementById("image1");
var num2 = document.getElementById("img2");
num2.className = "hero"
var counting = 50;
var count = 50;
window.onkeydown = function () {
    console.log(event.keyCode);
    if (event.keyCode === 100) {
       num2.src = "img/kyo-xi-run.gif";
        count = count - 50;
        num2.style.left = count + "px";
        num2.style.width = 320 + "px"
       num2.style.transform = "RotateY(180deg)"

        setTimeout(function () {
            num2.src = "img/kyo-xi-taunt.gif";
        num2.style.width = 200 + "px"

        }, 200)
    }
    if (event.keyCode === 102) {
        num2.src = "img//kyo-xi-run.gif";
        count = count + 50;
        num2.style.left = count + "px";
        num2.style.width = 320 + "px"
        num2.style.transform = "RotateY(180deg)"

        setTimeout(function () {
           num2.src  = "img/kyo-xi-taunt.gif";
        num2.style.width = 200 + "px"

        }, 300)
    }
   if (event.keyCode === 98) {
       num2.src = "img/kyo-xi-jump.gif";
       num2.style.width = 160 + "px"
       setTimeout(function () {
           num2.src = "img/kyo-xi-taunt.gif";
        num2.style.width = 200 + "px"
     
          
       }, 1300)
   }
   if (event.keyCode === 104) {
       num2.src = "img/kyo-xi-sweep.gif";
       num2.style.width = 450 + "px"

       setTimeout(function () {
           num2.src = "img/kyo-xi-taunt.gif";
        num2.style.width = 200 + "px"

       }, 1300)
   }
   if (event.keyCode === 90) {
       num2.src = "img/kyo-xi-a.gif";
       num2.style.width = 450 + "px"

       setTimeout(function () {
           num2.src = "img/kyo-xi-taunt.gif";
        num2.style.width = 200 + "px"
            
       }, 1300)
   }
   if (event.keyCode === 81) {
    num2.src = "img/kyo98-projectile.gif";
    num2.style.width = 700 + "px"

    setTimeout(function () {
        num2.src = "img/kyo-xi-taunt.gif";
    num2.style.width = 200 + "px"

    }, 1300)
}
   if (event.keyCode === 86) {
       num2.src = "img/kyo-xi-special10 (1).gif";
       num2.style.width = 700 + "px"

       setTimeout(function () {
           num2.src = "img/kyo-xi-taunt.gif";
       num2.style.width = 200 + "px"

       }, 1300)
    }
   
   if (event.keyCode === 39) {
       num1.src = "img/ralf-kof2002-running.gif";

       counting = counting + 50;
       num1.style.left = counting + "px";
       num1.style.width = 300 + "px"
       
       setTimeout(function () {
           num1.src = "img/ralf-kof2002-stance.gif";
       num1.style.width = 200 + "px"

       }, 200)
   }
   if (event.keyCode === 37) {
       num1.src = "img/ralf-kof2002-running.gif";
       counting = counting - 50;
       num1.style.left = counting + "px";
       num1.style.width = 300 + "px"
        
       setTimeout(function () {
           num1.src = "img/ralf-kof2002-stance.gif";
       num1.style.width = 200 + "px"

           
       }, 300)
   }
   if (event.keyCode === 38) {
       num1.src = "img/ralf-kof2002-jump-attacks2 (1).gif";
       num1.style.width = 200 + "px"

      
       setTimeout(function () {
           num1.src = "img/ralf-kof2002-stance.gif";
           num1.style.width = 200 + "px"


       }, 1300)
   }
   if (event.keyCode === 69) {
       num1.src = "img/ralf-kof2002-special6.gif";
       num1.style.width = 750 + "px"
    
       setTimeout(function () {
           num1.src = "img/ralf-kof2002-stance.gif";
           num1.style.width = 200 + "px"

       }, 1300)
   }
   if (event.keyCode === 66) {
       num1.src = "img/ralf-kof2002-spinpunch.gif";
       num1.style.width = 400 + "px"
       setTimeout(function () {
           num1.src = "img/ralf-kof2002-stance.gif";
           num1.style.width = 200 + "px"

       }, 1300)
   }
   if (event.keyCode === 80) {
     

       num1.src = "img/ralf-kof2002-special.gif";
      num1.style.width = 360 + "px"
       setTimeout(function () {
           num1.src = "img/ralf-kof2002-stance.gif";
           num1.style.width = 200 + "px"
       }, 1300)
   }
   if (event.keyCode === 40) {
       num1.src = "img/ralf-kof2002-into-crouch.gif";
       num1.style.width = 220 + "px"
       setTimeout(function () {
           num1.src = "img/ralf-kof2002-stance.gif";
           num1.style.width = 200 + "px"

       }, 1300)
   }
}



   


