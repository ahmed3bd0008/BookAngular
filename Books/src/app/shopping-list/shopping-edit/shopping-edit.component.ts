import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/Shared/model/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredientGroup !:FormGroup;
  constructor(private shopservice:ShoppingService) { }

  ngOnInit() {
    this.ingredientGroup=new FormGroup({
      name:new FormControl(null,[Validators.required]),
      amount:new FormControl(null,[Validators.required, Validators.pattern("^[0-9]*$"),])
    }
    )
  }
  onSubmite(){
   if(this.ingredientGroup.valid){
    const ingrdent:Ingredient={name:this.ingredientGroup.value.name,amount:this.ingredientGroup.value.amount}

     this.shopservice.addIngredient(ingrdent)
   }
  }

}
