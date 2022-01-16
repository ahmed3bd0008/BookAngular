import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeDetails',
  templateUrl: './recipeDetails.component.html',
  styleUrls: ['./recipeDetails.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 @Input() recipe !:Recipe
  constructor(private recipeservice:RecipeService) { }

  ngOnInit() {

  }
  AddingredentstoShop(){
    this.recipeservice.addingredentToShop(this.recipe.ingredient)
  }

}
