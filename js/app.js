const cocktail = new CocktailAPI(),
ui = new UI();


const searchForm = document.querySelector('#search-form');
searchForm.addEventListener('submit',getCocktails);
const type = document.querySelector('#type');
const page = type.value;
const results = document.querySelector('#results');
if(results){
results.addEventListener('click', resultsDelegation);
}





function getCocktails(e){
    e.preventDefault();
    
    
    const searchTerm  = document.querySelector('#search').value

    if(searchTerm){
        switch(page){
            case 'name': cocktail.getDrinksByName(searchTerm)
            .then(cocktails =>{
            
                if(cocktails.drinks !== null){
            
                
                    
                    ui.displayDrinksWithIngredients(cocktails.drinks);
                }
                else{
                   ui.printMessage('No match found');
                }
                
            })
            break;
            case 'ingredient': console.log('ingredients');
            cocktail.getDrinksByIngredient(searchTerm)
            .then(cocktails =>{
                if(cocktails.drinks !== null){
                    ui.displayDrinks(cocktails.drinks);
                }
                else{
                    ui.printMessage('No match found');
                }
            })

        }
       
        

    }
    else {
        ui.printMessage('Please type something');
    }
}
function resultsDelegation(e){
    e.preventDefault();
    if(e.target.classList.contains('get-recipe')){
        console.log(e.target.dataset.id);
        cocktail.getModal(e.target.getAttribute('data-id'))
        .then(drinks => {
            ui.displayModal(drinks);
        })
    }
}