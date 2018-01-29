import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from 'app/shared/dropdown.directive';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { AppRoutingModule } from 'app/app-routing.module';
import { RecipeStartComponent } from 'app/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from 'app/recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from 'app/recipes/recipes.service';
import { DataStorageService } from 'app/shared/datastorage.service';


// Define the routes
/*const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];
*/

@NgModule({
  declarations: [
    AppComponent,
    //PostsComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PostsService,ShoppingListService,RecipeService,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
