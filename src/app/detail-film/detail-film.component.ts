import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.css']
})
export class DetailFilmComponent implements OnInit {

  id:number;
  film;
  constructor(private route: ActivatedRoute,private filmService: FilmService) {
    this.route.params
    .subscribe( params => this.id = params.id)
   }
  ngOnInit() {
    this.getFilmByName(this.id);
  }
  getFilmByName(id){
    this.filmService.getFilmByName(id)
    .subscribe(data => {
     this.film = data;
    });
  }
}
