import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingModule } from './group-routing.module';
import { GroupComponent } from './group.component';
import { LinksGroupComponent } from './links/links.component';
import { DocumentsGroupComponent } from './documents/documents.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GroupComponent, LinksGroupComponent, DocumentsGroupComponent],
  imports: [
    CommonModule,
    SharedModule,
    GroupRoutingModule
  ]
})
export class GroupModule { }
