import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{map}from'rxjs/operators'
import { Post } from './post';
import { PostService } from './post.service';
@Component({
  selector: 'app-HttpClientFireBase',
  templateUrl: './HttpClientFireBase.component.html',
  styleUrls: ['./HttpClientFireBase.component.css']
})
export class HttpClientFireBaseComponent implements OnInit {
  posts!:Post[];
  isFetched:boolean=false;
  constructor(private http:HttpClient,private postService:PostService) { }
 // https://angulardatabase-75e49-default-rtdb.firebaseio.com/
  ngOnInit() {
    this.fetchData()
  }
  onSubmite(f:NgForm){
    this.postService.createPost(f.value.title,f.value.content)
  }
  fetchData(){
   this.posts= this.postService.getPosts();
  }
  private fetchAllData(){
    this.isFetched=true;
    this.http.get<{[key:string]:Post}>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json').
    pipe(map((responseData)=>{
      let arrayData:Post[]=[];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)) {
          arrayData.push({...responseData[key],id:key});
        }
      }
      return arrayData
    })).
    subscribe((response=>{
     this.posts=response;
     this.isFetched=false;
      console.log(response)
    }))
  }
}
