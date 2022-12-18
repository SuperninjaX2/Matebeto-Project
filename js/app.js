const observer = new IntersectionObserver((entries)=>{
	entries.forEach((entry) =>{
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show')
		} else {
			entry.target.classList.remove('show')
		}
	})
})
const hidden=document.querySelectorAll('.hidden');
hidden.forEach((el)=>observer.observe(el));
console.log('show')

let body = document.querySelector('body')
let cart2 = document.querySelector("#two")
let cart3 = document.getElementById('three')


function local() {
	// body...
var bod = document.querySelector("#info");
	bod.innerHTML = "  <h1 style='font-family: open;'>local</h1>"+
  						"<div class='item'>"+
          				"<div class='row  row-cols-1 row-cols-md-2 g-4'>"+
          				"<div class='col'>"+
            			"<div class='card'>"+
              			"<img src='images/7.jpg' class='img'>"+
              			"<div class='card-body'>"+
                		"<h5 class='card-title' style='font-family: open;''>Local</h5>"+
             			"<p><a class='btn btn-lg btn-success btn-outline-light'href='buy.html'>order</a></p>"+
              			"</div>"+
            			"</div>"+
          				"</div>"+
        				"</div>"+  
     					 "</div>";
}
meaty=()=>{
	var bod = document.querySelector("#info");
	bod.innerHTML = "  <h1 style='font-family: open;'>Meaty</h1>"+
  						"<div class='item'>"+
          				"<div class='row  row-cols-1 row-cols-md-2 g-4'>"+
          				"<div class='col'>"+
            			"<div class='card'>"+
              			"<img src='images/8.jpg' class='img'>"+
              			"<div class='card-body'>"+
                		"<h5 class='card-title' style='font-family: open;''>Local</h5>"+
                		"<P class='lead'>meat tastes great when it is cooked with love</P>"+
             			"<p><a class='btn btn-lg btn-success btn-outline-light'href='buy.html'>order</a></p>"+
              			"</div>"+
            			"</div>"+
          				"</div>"+
        				"</div>"+  
     					 "</div>";
}
veg=()=>{
	var bod = document.querySelector("#info");
	bod.innerHTML = "  <h1 style='font-family: open;'>Vegetables</h1>"+
  						"<div class='item'>"+
          				"<div class='row  row-cols-1 row-cols-md-2 g-4'>"+
          				"<div class='col'>"+
            			"<div class='card'>"+
              			"<img src='images/3.jpg' class='img'>"+
              			"<div class='card-body'>"+
                		"<h5 class='card-title' style='font-family: open;''>Local</h5>"+
                		"<P class='lead'>You are too old to say that vegtables aint good</P>"+
             			"<p><a class='btn btn-lg btn-success btn-outline-light'href='buy.html'>order</a></p>"+
              			"</div>"+
            			"</div>"+
          				"</div>"+
        				"</div>"+  
     					 "</div>";
}

const themes = {
	light:{
		backgroundColor:'white',
		color:'black'
	},
	dark:{
		backgroundColor:'black',
		color:'white'
	}
}
let currentTheme = themes.light;

function tooggle() {
	currentTheme = currentTheme===
	themes.light ? themes.dark:
	themes.light;
	applyThemes(currentTheme);
}
function applyTheme(themes){
	document.body.style.backgroundColor = themes.backgroundColor;
	document.body.style.backgroundColor = themes.color;
}
applyTheme(currentTheme);

document.getElementById('themebtn').addEventListener('click', tooggle)