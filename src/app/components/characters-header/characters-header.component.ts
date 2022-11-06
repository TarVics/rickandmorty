import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common'

import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-characters-header',
  templateUrl: './characters-header.component.html',
  styleUrls: ['./characters-header.component.css']
})
export class CharactersHeaderComponent implements OnInit {
  @Input()
  episode: IEpisode;

  constructor(private location: Location) {
  }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
