import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageRoutingModule } from './page-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { PageComponent } from './page.component';

import {
  VissionMisionComponent,
  LeaderComponent,
  OfficialSymbolComponent,
  CoordinationCouncilComponent,
  DirectoryComponent,
  ProsecutorComponent,
  ManagementComponent,
  LaborComponent,
  ConsultationComponent,
  DirectoryCouncilComponent

} from './components';

const COMPONENTS = [
  VissionMisionComponent,
  LeaderComponent,
  OfficialSymbolComponent,
  CoordinationCouncilComponent,
  DirectoryComponent,
  ProsecutorComponent,
  ManagementComponent,
  LaborComponent,
  ConsultationComponent,
  DirectoryCouncilComponent,

];

@NgModule({
  declarations:
    [PageComponent, ...COMPONENTS],
  imports: [
    CommonModule,
    SharedModule,
    PageRoutingModule,
  ]
})
export class PageModule { }
