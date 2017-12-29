import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  ingItem: Ingredient;
  
  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
  }

  onAddIng(nameInput: HTMLInputElement, amtInput: HTMLInputElement) {
    this.shoppingListService.ingredientAdded.next(new Ingredient( nameInput.value, Number(amtInput.value)));
  }
}
