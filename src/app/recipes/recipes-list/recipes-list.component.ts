import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipes>();
    recipes: Recipes[] = [
        new Recipes('A Test Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
        new Recipes('boom Recipe', 'This is simply a test', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipes) {
    this.recipeWasSelected.emit(recipe);
  }

}
