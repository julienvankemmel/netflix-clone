import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SerieService {

  constructor(private http:HttpClient) { }
  getSeries():Observable<any[]>{
    return this.http.get<any[]>('https://api.themoviedb.org/3/discover/tv?api_key=87dfa1c669eea853da609d4968d294be&language=en-US&sort_by=popularity.desc&page=1')
    .pipe(
      tap(data => data)
    )
  }
  getSerieByName(name): Observable<any>{
    return this.http.get<any>('https://api.themoviedb.org/3/tv/'+name+'?api_key=87dfa1c669eea853da609d4968d294be&language=fr-FR')
    .pipe(
      tap(data => data)
    )
  }
}
