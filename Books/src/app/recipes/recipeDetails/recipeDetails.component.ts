import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeDetails',
  templateUrl: './recipeDetails.component.html',
  styleUrls: ['./recipeDetails.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  //delete when use rooting
 //@Input() recipe !:Recipe
 recipe !:Recipe
 id !:number;
  constructor(private recipeservice:RecipeService,
              private routeActive:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    //in case route onle one في حاله لو كان الروات زرار هنضغط عليها هيروح للصفحه مش لست من ال الازرار كل ما اضغط  زرا يويني عل صفحه وبيعرضها في نفس الصفحه
    //const id= this.rout.snapshot.params.id
    this.routeActive.params.subscribe(
      (parsm:Params)=>{
        this.id=parsm.id
        this.recipe=this.recipeservice.getrecipeByIndex(this.id);
      }
    )
  }
  AddingredentstoShop(){
    this.recipeservice.addingredentToShop(this.recipe.ingredient)
  }
  onEditRecipe(){
  //to is correct
    //this.router.navigate(['../',this.id,'editRecipe'],{relativeTo:this.routeActive})
   this.router.navigate(['editRecipe'],{relativeTo:this.routeActive})
  }

}
