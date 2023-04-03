import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Song } from '../songs'

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'https://rapid-fine-mask.glitch.me/melodii/';
  constructor(private http: HttpClient) { }
  getSongs():Observable<Song[]>
  {
    return this.http.get<Song[]>(this.apiUrl);
  }
}
