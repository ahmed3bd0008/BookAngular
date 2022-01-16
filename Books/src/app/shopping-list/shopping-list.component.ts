import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/model/ingredient';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingredients !:Ingredient[]
//  =[
//    {name:'Tomatom',amount:10},
//    {name:'cake',amount:10}
//   ]
  constructor(private shopeservice:ShoppingService) { }

  ngOnInit() {
    this.ingredients=this.shopeservice.getAllIngredient();
  }

}
