import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';
import { DocumentsGroupComponent } from './documents/documents.component';
import { LinksGroupComponent } from './links/links.component';


const routes: Routes = [
  { path: '', component: GroupComponent,
    children: [
      { path: 'documents/:id', component: DocumentsGroupComponent },
      { path: 'links/:id', component: LinksGroupComponent },
      { path: '', redirectTo: 'documents/:id', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingModule { }
