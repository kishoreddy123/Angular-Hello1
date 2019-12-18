import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
      
      posts: any[];
      constructor(private service: PostService){

      }
      ngOnInit(){
        this.service.getPosts()
          .subscribe((response) => {
            this.posts = response.json();
            console.log(response.json());
            console.log(this.posts);   
          }, error => {
            alert('an unexpected error occured..')
            console.log(error);
            
          })

      }

      createPost(input: HTMLInputElement){
        let post = { title: input.value}
        input.value = ''
        this.service.createPosts(post)
          .subscribe((response) => {
            post['id'] = response.json().id;
            this.posts.splice(0,0,post)
          }, (error: Response) => {
            if (error.status === 400) {
   //           this.form.setErrors(error.json()) // displayes the error message next to the filed incase of forms
            } else {
              alert('Unexpected error occured while creating post..')
              console.log(error);
            }

          })
      }
      
      updatePost(post) {
        this.service.updatePost(post.id)
        //this.http.post(this.url,JSON.stringify(post))  //To modify the Entire object
          .subscribe(response => {
            console.log(response); 
          }, error => {
            alert('Unexpected Error occured while update..')
            console.log(error);
          })
      }

      deletePost(post) {
        this.service.deletePost(post.id)
          .subscribe(response => {
            let index = this.posts.indexOf(post)
            this.posts.splice(index, 1);
          },
           (error: Response) => {
            if (error.status === 400) {
              alert('This post is already deleted..')  //Expected Error
            } else {
              alert('Unexpected Error occured while deleting..') //Unexpected Error
              console.log(error);
            }
            
          })
      }



}
