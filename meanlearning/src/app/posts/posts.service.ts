import { Post } from './post.model';
import { Injectable } from '../../../node_modules/@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export  class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();
  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }
  addPost(title: String, content: String) {
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
