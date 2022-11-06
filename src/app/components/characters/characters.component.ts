import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {EpisodeService} from "../../services";
import {ICharacter, IEpisode} from "../../interfaces";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  episode: IEpisode;
  characters: ICharacter[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private episodeService: EpisodeService) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.episode = this.router.getCurrentNavigation()?.extras.state as IEpisode;
      if (!this.episode) {
        episodeService.getById(id).subscribe(value => {
          this.episode = value;
          episodeService.getCharacters(this.episode).subscribe(value => this.characters = value);
        });
      } else {
        episodeService.getCharacters(this.episode).subscribe(value => this.characters = value);
      }
    })
  }

  ngOnInit(): void {
  }

}
