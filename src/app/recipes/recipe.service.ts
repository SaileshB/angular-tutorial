import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService:ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Beef Salad',
      'test description',
      'http://cafefcdn.com/thumb_w/650/2016/shutterstock-239213197-1024x1024-1468897333288.gif',
      [
        new Ingredient('Beef', 25),
        new Ingredient('Lettuce', 18)
      ]),
    new Recipe(
      'Pork Ribs with Mashed potatoes',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI_rxfeWSn3nCZ4CQVUeMNx0-63-cj2GvgoDi17dwturjoSclQ',
      [
        new Ingredient('Pork', 20),
        new Ingredient('Potatoes', 5)
        
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

}
