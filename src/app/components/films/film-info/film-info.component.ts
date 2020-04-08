import { Component, OnInit, Input, Output } from '@angular/core';
import { Film } from '../../../data/films/film';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {

  @Input() public title: string;
  @Input() public film: Film;

  constructor() {
  }

  ngOnInit() {

  }

}
