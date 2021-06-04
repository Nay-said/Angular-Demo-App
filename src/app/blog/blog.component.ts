import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Posts } from '../models/posts-model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: Posts[] = [];
  
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(posts => {
      this.posts = posts
      console.log(this.posts)
    })
  }
}
