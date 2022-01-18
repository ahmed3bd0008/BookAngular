import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-EditRecipe',
  templateUrl: './EditRecipe.component.html',
  styleUrls: ['./EditRecipe.component.css']
})
export class EditRecipeComponent implements OnInit {
  recipeId!:number;
  recipe!:Recipe;
  updateFormGroup!:FormGroup;
  constructor(private activeRouter:ActivatedRoute,private recipeServ:RecipeService) { }

  ngOnInit() {
    this.recipeId=   this.activeRouter.snapshot.params.id;
    this.recipe= this.recipeServ.getrecipeByIndex(this.recipeId);

    this.updateFormGroup=new FormGroup({
      name:new FormControl(this.recipe.name,[Validators.required]),
      imagePath:new FormControl(this.recipe.imagePath,[Validators.required]),
      desc:new FormControl(this.recipe.discription,[]),
    })
  }

}
