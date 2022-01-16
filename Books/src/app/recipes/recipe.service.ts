import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../Shared/model/ingredient';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Recipe } from './recipe';
//why use this make instance of service when use each time  كل مره اغير فيها ال الروت root
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:Recipe[]=[
    {name:"ahmed",discription:"new field",imagePath:"https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg",
    ingredient:[{name:'meta',amount:2}]},
    {name:"asmaa",discription:"new field",imagePath:"https://www.spoonforkbacon.com/wp-content/uploads/2021/02/dinner-recipes-688x916.jpg",
    ingredient:[{name:'tomatem',amount:1},{name:'fol',amount:1}]},
    {name:"asmaa",discription:"new field",imagePath:"https://www.bing.com/th?id=AMMS_f39f945bd5e52d9cf88a9f562a73a10d&w=406&h=305&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1",
    ingredient:[{name:'ice',amount:10}]},
  ]
  recipeEventDetails=new EventEmitter<Recipe>();
constructor(private shopService:ShoppingService) { }
 getRecipe(){
   //slice Git Cope Of array if not have  prameter
   //if have prameter
   return this.recipes.slice();
 }
 addingredentToShop(ingredient :Ingredient[]){
   this.shopService.addIngredientFromRecipe(ingredient)
 }
}
