import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { IPost } from '../posttype';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})  

export class PostsComponent implements OnInit {
  posts: IPost[];
  constructor(private postsService : PostsService) { }

  ngOnInit() {
    //Get posts
    this.postsService.getAllPosts()
    .subscribe(posts => { this.posts = posts; });
  }

}
