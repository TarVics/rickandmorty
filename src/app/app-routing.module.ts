import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {MainLayoutComponent} from "./layouts";
import {EpisodeResolver} from "./services";
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {CharactersComponent} from "./components/characters/characters.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: 'episodes', pathMatch: 'full'},
      {
        path: 'episodes',
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        resolve: {data: EpisodeResolver},
        component: EpisodesComponent
      },
      {path: 'episodes/:id', component: CharactersComponent},
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
