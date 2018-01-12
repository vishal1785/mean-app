import { Injectable } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shopListService : ShoppingListService){}

    private recipes : Recipe[] = [
        new Recipe("Ratatoiulle","A mouse chef favourite dish",
        "https://www.traegergrills.com/on/demandware.static/-/Library-Sites-TraegerSharedLibrary/default/dw2e9a03f1/images/recipes/20170803_Smoked-Ratatouille_RE_HE_M.jpg", 
        [
            new Ingredient('Capsicum',10),
            new Ingredient('Brocolli',15)
        ]),
        new Recipe("Schnitzel ","A schnitzel is meat dish",
        "https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/16:9/w_1000,c_limit/chicken-schnitzel.jpg",
        [
            new Ingredient('Red Meat',5),
            new Ingredient('French Fries',20)
        ])
    ];
    
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(index: number){
        return this.recipes.slice()[index];
    }

    addRecipeToShopList(recipeIngredients : Ingredient[]){
        this.shopListService.addIngredientsToList(recipeIngredients);
    }
}