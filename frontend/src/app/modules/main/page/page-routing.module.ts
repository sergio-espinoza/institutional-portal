import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import {
  VissionMisionComponent,
  LeaderComponent,
  OfficialSymbolComponent,
  CoordinationCouncilComponent
} from './components';

const routes: Routes = [
  { path: '', component: PageComponent,
    children: [
      { path: '', component: LeaderComponent },
      { path: 'vission-mission', component: VissionMisionComponent },
      { path: 'official-symbol', component: OfficialSymbolComponent},
      { path: 'coordination-council', component: CoordinationCouncilComponent},
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
