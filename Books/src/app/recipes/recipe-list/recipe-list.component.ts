import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes!:Recipe[]
// =[
//   {name:"ahmed",discription:"new field",imagePath:"https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg"},
//   {name:"asmaa",discription:"new field",imagePath:"https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg"},
// ]
@Output() selectRecipeDetails=new EventEmitter<Recipe>();
  constructor(private recipeservice:RecipeService) { }

  ngOnInit() {
    this.recipes=this.recipeservice.getRecipe();
  }
  onSelectItemP(recipe:Recipe){
   this.selectRecipeDetails.emit(recipe);
  }
}
