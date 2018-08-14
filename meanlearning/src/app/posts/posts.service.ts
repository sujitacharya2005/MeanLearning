import { Post } from './post.model';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({providedIn: 'root'})
export  class PostsService {
  private posts: Post[] = [];
  getPosts() {
    return [...this.posts];
  }
  addPost(title: String, content: String) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
  }
}
