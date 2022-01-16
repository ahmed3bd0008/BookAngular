import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
//why use this make instance of service when use each time  كل مره اغير فيها ال الروت root
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes:Recipe[]=[
    {name:"ahmed",discription:"new field",imagePath:"https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg"},
    {name:"asmaa",discription:"new field",imagePath:"https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg"},
    {name:"asmaa",discription:"new field",imagePath:"https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg"},
  ]
constructor() { }
 getRecipe(){
   //slice Git Cope Of array if not have  prameter
   //if have prameter 
   return this.recipes.slice();
 }
}
