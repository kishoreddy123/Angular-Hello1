import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getPosts(){
    return this.http.get(this.url)
  }

  createPosts(post) {
    return this.http.post(this.url, JSON.stringify(post))
  }
  updatePost(id) {
    return this.http.patch(this.url + '/' + id, JSON.stringify({isRead:true}))  // used to modify the few property of an object
  }
  deletePost(id) {
    return this.http.delete(this.url + '/' + id)
  }

}
