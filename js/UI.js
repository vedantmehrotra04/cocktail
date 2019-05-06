class UI {
    displayDrinksWithIngredients(drinks){
        
        
        const resultWrapper = document.querySelector('.results-wrapper');
        resultWrapper.style.display = 'block';
        const result = document.querySelector('#results');
        const div = document.createElement('div');
        drinks.forEach(drink =>{
            result.innerHTML+= `
            <div class='col-md-6'>
            <div class='card my-3'>
            <img class='card-img-top' src='${drink.strDrinkThumb}' alt='${drink.strDrink}'>

            <div class='card-body'>
            <h2 class='card-title text-center'>${drink.strDrink}</h2>
            <p class='card-text font-weight-bold'>Instructions</p>
            <p class='card-text'>
         ${drink.strInstructions}
            </p>
            <p class='card-text'>
            <ul class='list-group'>
            <li class='list-group-item alert alert-danger'>Ingredients</li>
            ${this.displayIngredients(drink)}

            </ul>
            </p>
            <p class='card-text'>Extra Information</p>
            <p class='card-text'>
            <span class='badge badge-pill badge-success'>
            ${drink.strAlcoholic}
            </span>
            <span class='badge badge-pill badge-danger'>
            ${drink.strCategory}
            </span>
            </p>
            </p>
            </div>
            </div>
            </div>
            `;
            

        })
    }
    displayIngredients(drink){
        
        let ingredients = [];
    
        for(let i=0; i<15;i++){
            const ingredientmeasure = { };
            
            if( drink[`strIngredient${i+1}`] !== ''){
                ingredientmeasure.ingredient = drink[`strIngredient${i+1}`];
                ingredientmeasure.measure = drink[`strMeasure${i+1}`];
                ingredients.push(ingredientmeasure);
            }
            
            
         

        }
    
        
        let template = '';
        ingredients.forEach(ing => {
            template += `
            <li class='list-group-item'>${ing.ingredient}-${ing.measure}</li>
            `;
        });
        return template;
    }

    printMessage(message){
        const div = document.createElement('div');
        div.innerHTML= `
        <div class='alert alert-danger alert-dismissible'>
        <button type='button' class='close' data-dismiss='alert'>x</button>${message}</div>
        `;
        const refrence = document.querySelector('.jumbotron h1');
        const parentNode = refrence.parentElement;
        parentNode.insertBefore(div , refrence);
        setTimeout(() => {
          div.style.display = 'none';
        },3000);
    }

    displayDrinks(drinks){
        const resultWrapper = document.querySelector('.results-wrapper');
        resultWrapper.style.display = 'block';
        const result = document.querySelector('#results');
        const div = document.createElement('div');
        drinks.forEach(drink =>{
            result.innerHTML+= `
            <div class='col-md-4'>
            <div class='card my-3'>
            <img class='card-img-top' src='${drink.strDrinkThumb}' alt='${drink.strDrink}'>
            <div class='card-body'>
            <h2 class='card-title text-center'>${drink.strDrink}</h2>
            <a data-target='#recipe' class='btn btn-success get-recipe' data-toggle='modal' data-id=${drink.idDrink}>Get recipe</a>
            </div>
            </div>
            </div>

            `;
        })

    }

    displayModal(recipe){
        const title = document.querySelector('.modal-title'),
         description = document.querySelector(' .description-text');
        title.innerHTML = recipe.strDrink;
        description.innerHTML = recipe.strInstructions;
        const ingredientlist = document.querySelector('.ingredient-list .list-group');
        ingredientlist.innerHTML = this.displayIngredients(recipe);

    }
}