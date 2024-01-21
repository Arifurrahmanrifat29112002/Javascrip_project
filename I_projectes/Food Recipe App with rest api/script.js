const searchBtn = document.getElementById("search-btn");
const recipeItems = document.querySelector(".recipe-itmes");
const recipeItemDetailas = document.querySelector(".recipe-items-detials");


//get recipe item
const getRecipe = () =>{
    let inputValue = document.getElementById('searchInput').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`)
    .then(response => response.json())
    .then((data) => {
        let html = "";
        if (data.meals) {
            data.meals.forEach(meal => {
                html += `
                    <div class="recipe-item" data-id=${meal.idMeal}>
                        <img src="${meal.strMealThumb}">
                        <p>${meal.strMeal}</p>
                        <button class="recipe-btn">Get Recipe</button>
                    </div>
                `;   
            });
        }else{
            html = "No Meal Found!";
        }
        recipeItems.innerHTML = html;
    })
}



//show details of selected meal
const getRecipeMeal = (e) =>{
    e.preventDefault();
    if (e.target.textContent === 'Get Recipe') {
        let mealItem = e.target.parentElement;
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
        .then(response => response.json())
        .then(data => getRecipeModel(data.meals))
    }
}


const getRecipeModel =(meal) =>{
    // console.log(meal[0].strMeal);
     let mealItem = meal[0];

     let html = `
        <button id="closeBtn" onclick="recipeModelClose()">X</button>
        <h2>${mealItem.strMeal}</h2>
        <h4>${mealItem.strCategory}</h4><br>
        <strong>instraction:</strong>
        <p>${mealItem.strInstructions}</p>
        <img src="${mealItem.strMealThumb}">
        <br>
        <a href="${mealItem.strYoutube}">Watch video</a>
     `;

     recipeItemDetailas.innerHTML= html;
     recipeItemDetailas.classList.add("showRecipeBox");
}

//recipe Model Close
const recipeModelClose = () =>{
    recipeItemDetailas.classList.remove('showRecipeBox');
}

//event Listener
searchBtn.addEventListener("click",getRecipe);
recipeItems.addEventListener("click",getRecipeMeal);
