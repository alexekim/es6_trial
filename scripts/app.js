// document.getElementById('header').addEventListener("mouseover", function(){
//   console.log("hovered");
//   document.getElementById('headerEmoji').innerHTML = "😎";
// })
//
// document.getElementById('header').addEventListener("mouseleave", function(){
//   console.log("hovered");
//   document.getElementById('headerEmoji').innerHTML = "🤓";
// })
//
// document.addEventListener("DOMContentLoaded", function(event) {
//   // console.log("asdf");
//   document.getElementById("app").style.display = "block";
// });
//
// document.getElementById("bg").addEventListener("load", function(event){
//   document.getElementById("app").style.display = "block";
//   console.log("image loaded");
// })

var src = document.getElementById("bg").style.backgroundImage;
var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

var img = new Image();
img.onload = function(){
  alert('image loaded');
}

img.src = url;
if(img.complete){
  img.onload();
}
