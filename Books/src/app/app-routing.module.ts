import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRecipeComponent } from './recipes/EditRecipe/EditRecipe.component';
import { NewRecipeComponent } from './recipes/NewRecipe/NewRecipe.component';
import { RecipeDetailsComponent } from './recipes/recipeDetails/recipeDetails.component';
import { RecipesComponent } from './recipes/recipes.component';
import { StartComponent } from './recipes/start/start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
//must order the route
const routes: Routes = [
  {path:'',redirectTo:'/repices',pathMatch:'full'},
  {path:'repices',component:RecipesComponent,children:[
    {path:'',component:StartComponent},
    {path:'newRecipe',component:NewRecipeComponent},
    {path:':id',component:RecipeDetailsComponent},
    {path:':id/editRecipe',component:EditRecipeComponent},
  ]},
  {path:'shop-list',component:ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
