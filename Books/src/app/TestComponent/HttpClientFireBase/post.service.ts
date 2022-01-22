import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {
postEvent=new Subject<string>();
constructor(private http:HttpClient) { }

createPost(title:string,content:string){
 return this.http.post('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json',{title:title,content:content}).
 pipe(map((res:any)=>{
   console.log(res.name)
   this.postEvent.next(res.name as string);
   console.log(2)
   return res.name as string;
 }))

}
getPosts(){
 return this.http.get<{[key:string]:Post}>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json').
  pipe(map((responseData)=>{
    let arrayData:Post[]=[];
    for (const key in responseData) {
      if (responseData.hasOwnProperty(key)) {
        arrayData.push({...responseData[key],id:key});
      }
    }
   return arrayData
  }))
}
deletePosts(){
  return this.http.delete<Post[]>('https://angulardatabase-75e49-default-rtdb.firebaseio.com/posts.json').pipe(
    map((response)=>{
      const res:Post[]=response
      return response;
    })
  )
}
}
