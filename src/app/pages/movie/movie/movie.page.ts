import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../../services/movie/movie.service'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  providers:[MovieService]
})
export class MoviePage implements OnInit {

  ngOnInit() {
  }

  public lista_filmes = new Array<any>();

  constructor (public movieService : MovieService){
     this.getLast();
     this.getPopular();
  }

  getLast() {
    this.movieService.getLatestMovie().subscribe(
      (data: any)=>{
         let objRet = JSON.parse(data._body);
         console.log(objRet);
          }, error=>{
        console.log(error);
      }
    );
  }

  getPopular() {
    this.movieService.getPolular().subscribe(
      (data: any)=>{
         
        let objRet = JSON.parse(data._body);
        console.log(objRet);
        this.lista_filmes = objRet.results;
        console.log(this.lista_filmes);
      }, error=>{
        console.log(error);
      }
    );
  }

}
