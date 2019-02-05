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
    return "?api_key=005698ea500b12f5f957ba81e796327e"

  }
}
