// let buttonClick = document.getElementById('btn');

// btn.addEventListener('click', drinksFunction)

// function drinksFunction(){
//     let drink = document.getElementById('input').value
//     // let url =`https://www.thecocktaildb.com/api/json/v1/1/search.php?s={drink}`

// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks[0])
//         document.getElementById('image').src = data.drinks[0].strDrinkThumb
//         document.getElementById('h2drink').innerText = data.drinks[0].strInstructions
//         document.getElementById('heading').innerText = data.drinks[0].strCategory
// })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
// }



// let locationName = document.getElementById('btn_search')

// locationName.addEventListener('click', searchRestaurant)

// function searchRestaurant(){
//     const encodedParams = new URLSearchParams();
//     encodedParams.append("language", "en_US");
//     encodedParams.append("limit", "30");
//     encodedParams.append("location_id", "297704");
//     encodedParams.append("currency", "USD");
    
//     const options = {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/x-www-form-urlencoded',
//             'X-RapidAPI-Host': 'worldwide-restaurants.p.rapidapi.com',
//             'X-RapidAPI-Key': 'd30e783fecmsh1f81815cb2214a1p1b4415jsnf88579d37d70'
//         },
//         body: encodedParams
//     };
    
//     fetch('https://worldwide-restaurants.p.rapidapi.com/search', options)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.results.data[0].name)
            
//         })
//         .catch(err => console.error(err));

// }


let onsearch = document.getElementById('searchfood')
onsearch.addEventListener('click', searchFood)

function searchFood(){
  window.open("/search.html", "_blank");
}
// -------------------- Aboutus Section -------------------

let aboutus = document.getElementById("aboutus_discover");
console.log(aboutus)
aboutus.addEventListener('click', discover = () =>{
        // location.href = "http://www.google.com";
        // location.target = "_blank"

        window.open( "http://www.google.com", '_blank')
    });



    // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  } 
}

// --------------------- Grouping elements in Food Section -------------------

// let breakfast = document.getElementById("breakfast");

//     breakfast.addEventListener('click', breakfastFunction)

//     function breakfastFunction(){
//      html= " ";
//       fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data.meals)
//         for(i=0; i<data.meals.length; i++){
//             html += `<div class="col-md-4">
//             <div class="card">
//                 <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${data.meals[i].strMeal}</h5>
//                     <p class="card-text">${data.meals[i].strCategory}</p>
//                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         </div>`
//         }
//         document.getElementById('food').innerHTML = html;
//       })
//       .catch(err => {
//         console.log(`error ${err}`)
//       }
//       );
//     }

//---------------Testimonial-------------


document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);      
    }
  };
}

let imgObject = [
  "https://source.unsplash.com/450x450/?girl",
  "https://source.unsplash.com/450x450/?animals",
  "https://source.unsplash.com/450x450/?architecture",
  "https://source.unsplash.com/450x450/?nature",
  "https://source.unsplash.com/450x450/?people",
  "https://source.unsplash.com/450x450/?tech",
  "https://source.unsplash.com/450x450/?girl",
  "https://source.unsplash.com/450x450/?animals",
  "https://source.unsplash.com/450x450/?architecture",
  "https://source.unsplash.com/450x450/?nature",
  "https://source.unsplash.com/450x450/?people",
];

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

};

function scrollRight() {
  
  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1)) {
    nextImg = 0;
  } else {
    nextImg++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextImg = mainImg
  mainImg = prevImg;
   
  if (prevImg === 0) {
    prevImg = imgObject.length - 1;
  } else {
    prevImg--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();


// ----------------------- Back on Top Functionality ----------------------------

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ------------Blink Phone Number in Callus Section -----------

		var blink =
			document.getElementById('blink');

		setInterval(function () {
			blink.style.opacity =
			(blink.style.opacity == 0 ? 1 : 0);
		}, 500);

