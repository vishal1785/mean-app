import { Ingredient } from "app/shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    ingredientAdded = new EventEmitter<Ingredient>();

    private ingredients: Ingredient[] =[
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
          return this.ingredients.slice();
    }

    addIngredients(ing: Ingredient){
         this.ingredients.push(ing);
    }

    addIngredientsToList(ingItem : Ingredient[]){
        this.ingredients.push(...ingItem);
    }
}