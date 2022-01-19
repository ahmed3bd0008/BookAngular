import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-HttpClientFireBase',
  templateUrl: './HttpClientFireBase.component.html',
  styleUrls: ['./HttpClientFireBase.component.css']
})
export class HttpClientFireBaseComponent implements OnInit {

  constructor(private http:HttpClient) { }
 // https://angulardatabase-75e49-default-rtdb.firebaseio.com/
  ngOnInit() {
  }
  onSubmite(f:NgForm){
    this.http.post('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json',f.value).subscribe((respnse=>{
      console.log(respnse)
    }))
  }
}
