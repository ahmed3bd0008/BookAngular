import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-NewRecipe',
  templateUrl: './NewRecipe.component.html',
  styleUrls: ['./NewRecipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  AddRecipeForm!:FormGroup;
  constructor() { }

  ngOnInit() {
    this.AddRecipeForm=new FormGroup({
      Name:new FormControl(null,[Validators.required]),
      desc:new FormControl(null,[]),
      ImagePath:new FormControl(null,[Validators.required]),
    })
  }

}
