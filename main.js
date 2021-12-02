/*  abre e fecha a janela do usuario quando clicar no icone: > e x */
var btn = document.querySelector("#btn");
var btn_ = document.querySelector("#btn_");

var btn1 = document.querySelector("#btn1");
var btn1_ = document.querySelector("#btn1_");

var btn2 = document.querySelector("#btn2");
var btn2_ = document.querySelector("#btn2_");

var btn3 = document.querySelector("#btn3");
var btn3_ = document.querySelector("#btn3_");


btn.addEventListener("click", function() {
    var div = document.querySelector("#aux");
    
  if(div.style.display === "block") {
        div.style.display = "none";
    } else {
      div.style.display = "block";
  }
});
btn_.addEventListener("click", function() {
  var div = document.querySelector("#aux");
  
if(div.style.display === "block") {
      div.style.display = "none";
      card.style.display = "block";
  } else {
    div.style.display = "block";
}
});


btn1.addEventListener("click", function() {
  var div = document.querySelector("#aux2");
  
if(div.style.display === "block") {
      div.style.display = "none";
  } else {
    div.style.display = "block";
}
});

btn1_.addEventListener("click", function() {
var div = document.querySelector("#aux2");

if(div.style.display === "none") {
    div.style.display = "block";
    card.style.display = "none";
} else {
  div.style.display = "none";
}
});


btn2.addEventListener("click", function() {
  var div = document.querySelector("#aux3");
  
if(div.style.display === "block") {
      div.style.display = "none";
  } else {
    div.style.display = "block";
}
});
btn2_.addEventListener("click", function() {
var div = document.querySelector("#aux3");

if(div.style.display === "none") {
    div.style.display = "block";
    card.style.display = "none";
} else {
  div.style.display = "none";
}
});





btn3.addEventListener("click", function() {
  var div = document.querySelector("#aux4");
  
if(div.style.display === "block") {
      div.style.display = "none";
  } else {
    div.style.display = "block";
}
});
btn3_.addEventListener("click", function() {
var div = document.querySelector("#aux4");

if(div.style.display === "none") {
    div.style.display = "block";
    card.style.display = "none";
} else {
  div.style.display = "none";
}
});
