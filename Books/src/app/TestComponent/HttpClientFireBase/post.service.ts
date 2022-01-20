import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

constructor(private http:HttpClient) { }

createPost(title:string,content:string){
  this.http.post('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json',{title:title,content:content}).subscribe((respnse=>{
    console.log(respnse)
  }))
}
getPosts(){
 return this.http.get<{[key:string]:Post}>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json').
  pipe(map((responseData:any)=>{
    let arrayData:Post[]=[];
    for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        arrayData.push({...responseData[key],id:key});
      }
    }
    return arrayData
  })).
  subscribe((response=>{
    console.log(response)
  }))
}
}
