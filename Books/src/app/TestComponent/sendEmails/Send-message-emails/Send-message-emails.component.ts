import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Massage } from '../Model/massage';

@Component({
  selector: 'app-Send-message-emails',
  templateUrl: './Send-message-emails.component.html',
  styleUrls: ['./Send-message-emails.component.css']
})
export class SendMessageEmailsComponent implements OnInit {
  sendEmail!:FormGroup;
  constructor(private activeRouter:ActivatedRoute) {

   }
message!:Massage;
emails:string[]=[];
  ngOnInit() {


     this.activeRouter.queryParams.subscribe(
      prame=>{
       this.message={massage:prame.message,subject:prame.subject}
      }

     )
     this.sendEmail=new FormGroup(
      {
          email:new FormControl('hy'),
          massage:new FormControl(this.message.massage),
          subject:new FormControl(this.message.subject)
      })

  }
  addEmail(){
  this.emails.push(this.sendEmail.value.email);
  }
  deleteEmail(index :number){
    //const email:string=this.emails[index]
    this.emails.splice(index,1);
  }
}
