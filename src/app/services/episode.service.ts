import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacter, IEpisode, IPaginatedData} from "../interfaces";
import {urls} from "../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number = 1): Observable<IPaginatedData<IEpisode>> {
    return this.httpClient.get<IPaginatedData<IEpisode>>(urls.episode, {params: {page}})/*.pipe(delay(2000))*/;
  }

  getById(id: number): Observable<IEpisode> {
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`);
  }

  getCharacters(episode: IEpisode): Observable<ICharacter[]> {
    let ids = episode.characters.map(value => value.slice(value.lastIndexOf('/') + 1)).join();
    return this.httpClient.get<ICharacter[]>(`${urls.character}/${ids}`);
  }

}
