import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from './models/posts-model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  url: string = 'https://jsonplaceholder.typicode.com/posts?_limit=30'

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(this.url)
  }
}
