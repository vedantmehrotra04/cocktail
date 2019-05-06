class CocktailAPI {
     async getDrinksByName(term){
         const list = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`);
         const response = await list.json();
         return(response);
     }
     async getDrinksByIngredient(term){
         const list = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`);
         const response = await list.json();
         console.log(response);
         return response;
     }

     async getModal(id){
         const list = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
         const response = await list.json();
         console.log(response.drinks[0]);
         return response.drinks[0];
     }
}