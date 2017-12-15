import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { IPost } from './posttype';

const postsURL = '/api/posts';

@Injectable()
export class PostsService {

  constructor(private http : Http) { }

  getAllPosts(): Observable<IPost[]>{
    return this.http.get(postsURL)
      //.map(res => res.json);
      .map((response: Response) => <IPost[]> response.json())
  }

}
