import { Component, OnInit } from '@angular/core';
import { Post, PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  
  posts: Post[] = [];
  
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this.posts = this._postService.getPosts()
  }

}
