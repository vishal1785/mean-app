import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeService } from 'app/recipes/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  id: number;
  
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id  = params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    )
  }

  addToShoppingList(type: string){
    if(type == '1'){
      this.recipeService.addRecipeToShopList(this.recipe.ingredients);
    }
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo : this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
