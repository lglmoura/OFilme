import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  basePathUrl = "https://api.themoviedb.org/3";

  constructor(public http: Http) { }

  getLatestMovie(){
    return this.http.get(this.basePathUrl+"/movie/latest"+this.getApiKey())
  }
  
  getPolular(){
    return this.http.get(this.basePathUrl+"/movie/popular"+this.getApiKey())
  }
  getApiKey() {
    return "?"

  }
}
