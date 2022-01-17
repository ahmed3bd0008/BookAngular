import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule,NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgbCarouselComponent } from './TestComponent/ngb-carousel/ngb-carousel.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipeDetails/recipeDetails.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ViewChildComponent } from './TestComponent/ViewChild/ViewChild.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRecipeComponent } from './recipes/EditRecipe/EditRecipe.component';
import { NewRecipeComponent } from './recipes/NewRecipe/NewRecipe.component';

@NgModule({
  declarations: [
    AppComponent,
      HeaderComponent,
      RecipesComponent,
      ShoppingListComponent,
      ShoppingEditComponent,
      RecipeItemComponent,
      EditRecipeComponent,
      NewRecipeComponent,
      RecipeDetailsComponent,
      RecipeListComponent,
      RecipeItemComponent,
      NgbCarouselComponent,
      ViewChildComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
