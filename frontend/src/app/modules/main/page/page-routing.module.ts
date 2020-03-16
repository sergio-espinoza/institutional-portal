import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';
import {
  VissionMisionComponent,
  LeaderComponent,
  OfficialSymbolComponent,
  CoordinationCouncilComponent,
  ConsultationComponent,
  DirectoryComponent,
  LaborComponent,
  ProsecutorComponent,
  ManagementComponent,
  DirectoryCouncilComponent
} from './components';

const routes: Routes = [
  { path: '', component: PageComponent,
    children: [
      { path: '', component: LeaderComponent },
      { path: 'vission-mission', component: VissionMisionComponent },
      { path: 'official-symbol', component: OfficialSymbolComponent},
      { path: 'coordination-council', component: CoordinationCouncilComponent },
      { path: 'consultation', component: ConsultationComponent },
      { path: 'directory/:id', component: DirectoryComponent },
      { path: 'labor', component: LaborComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'prosecutor', component: ProsecutorComponent },
      { path: 'directory-council', component: DirectoryCouncilComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
