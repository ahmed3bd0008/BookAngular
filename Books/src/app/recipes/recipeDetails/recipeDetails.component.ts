import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipeDetails',
  templateUrl: './recipeDetails.component.html',
  styleUrls: ['./recipeDetails.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 @Input() recipe !:Recipe
  constructor() { }

  ngOnInit() {
  }

}
