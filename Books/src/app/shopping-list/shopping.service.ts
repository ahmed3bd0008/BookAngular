import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../Shared/model/ingredient';
@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
constructor() { }
ingredients :Ingredient[]=[
  {name:'Tomatom',amount:10},
  {name:'cake',amount:10}
 ]
 public arrayEvent=new Subject<Ingredient[]>();
 getAllIngredient(){
  //return this.ingredients.slice; lice while return cope of array when add orignal  will add bt we return the cope
  return this.ingredients.slice();
 }
 addIngredient(ingredient:Ingredient){
   console.log(ingredient)
   this.ingredients.push(ingredient);
   this.arrayEvent.next(this.ingredients.slice())
 }
 addIngredientFromRecipe(ingredients:Ingredient[]){
   this.ingredients.push(...ingredients);

 }
}
