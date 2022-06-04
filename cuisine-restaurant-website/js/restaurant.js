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