import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeService } from 'app/recipes/recipes.service';



@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipesService : RecipeService) { }

  ngOnInit() {
    this.recipesService.recipeSelected.
          subscribe(
              (rcpItem : Recipe) => { 
                this.selectedRecipe = rcpItem;
              }
          );
  }
}
