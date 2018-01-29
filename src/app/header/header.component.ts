import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from 'app/shared/datastorage.service';
import { RecipeService } from 'app/recipes/recipes.service';
import { Response } from '@angular/http/';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService){}

  onSaveData(){
      this.dataStorageService.saveRecipesToDB(this.recipeService.getRecipes())
          .subscribe(
            (response: Response) => {
              //console.log(response);
            }
          );
  }

  onFetchData(){
    this.dataStorageService.getRecipesFromDB();
  }

}
