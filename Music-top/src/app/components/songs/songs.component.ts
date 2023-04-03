import { Component,OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { Song } from '../../songs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit{
  songs: Song[] = [];
  constructor(private songService: SongService){}
  ngOnInit(): void {
    this.songService.getSongs().subscribe((songs) => (this.songs = songs));
  }
}
