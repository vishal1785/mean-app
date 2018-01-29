import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Recipe } from "app/recipes/recipe.model";
import { Response } from "@angular/http";
import { RecipeService } from "app/recipes/recipes.service";
import 'rxjs/Rx';

@Injectable()
export class DataStorageService{
    
    dbURL : string = "https://mean-app-recipe.firebaseio.com/";
    recipeEndPoint :string = "recipes.json";
    constructor(private http : Http,
                private recipeService: RecipeService) { }

    saveRecipesToDB(recipes: Recipe[]){
        return this.http.put(`${this.dbURL}${this.recipeEndPoint}`,recipes);
    }

    getRecipesFromDB(){
        this.http.get(`${this.dbURL}${this.recipeEndPoint}`)
                .map(
                    (response: Response) => {
                        const recipes: Recipe[] = response.json();
                        for(let recipe of recipes){
                            if(!recipe['ingredients']){
                                recipe['ingredients'] = []; // add empty ing to recipe item if its deletd on the firebase db
                            }
                        }
                        return recipes;
                    }
                )
                .subscribe(
                    (recipes: Recipe[]) => {
                      this.recipeService.setRecipes(recipes);
                    }
                  );
    }
}