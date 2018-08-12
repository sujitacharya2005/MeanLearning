import { Component } from '@angular/core';
import { style } from '../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'No Content';
  // onAddPost(postInput: HTMLTextAreaElement) {
    onAddPost() {
    this.newPost = this.enteredValue;
  }
}
