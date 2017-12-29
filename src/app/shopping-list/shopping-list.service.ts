import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

    ingredientAdded = new Subject<Ingredient>();

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