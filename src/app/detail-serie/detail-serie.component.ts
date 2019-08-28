import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-detail-serie',
  templateUrl: './detail-serie.component.html',
  styleUrls: ['./detail-serie.component.css']
})
export class DetailSerieComponent implements OnInit {

  id:number;
  serie;
  constructor(private route: ActivatedRoute,private serieService: SerieService) {
    this.route.params
    .subscribe( params => this.id = params.id)
   }
  ngOnInit() {
    this.getFilmByName(this.id);
  }
  getFilmByName(id){
    this.serieService.getSerieByName(id)
    .subscribe(data => {
     this.serie = data;
    });
  }

}
