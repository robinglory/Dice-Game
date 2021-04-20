var randomNumber1;
var randomNumber2;

randomNumber1 = Math.floor(Math.random()*7) ;
randomNumber2 = Math.floor(Math.random()*7) ;

var img1 = "images/dice"+randomNumber1+".png";
var img2 = "images/dice" + randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

if(randomNumber1 > randomNumber2)
{
   document.querySelector("h1").innerHTML="Player One Win!!"
}
else if(randomNumber2 > randomNumber1)
   {
      document.querySelector("h1").innerHTML="Player Two Win!!!"
   }
else
{
   document.querySelector("h1").innerHTML="You both Tied!! Try Again!!"
}
