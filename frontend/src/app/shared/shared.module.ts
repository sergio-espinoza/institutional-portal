import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {
  InfoComponent,
  NotificationComponent,
  ItemDetailComponent,
  MenuBasicComponent,
  LinkListComponent,
  MinimizedViewComponent,
  TableIconComponent,
  PdfViewComponent,
  LinkComponent
} from './components';

import {
  SatinizerPipe
} from './pipes';


const COMPONENTS = [
  InfoComponent,
  NotificationComponent,
  ItemDetailComponent,
  MenuBasicComponent,
  LinkListComponent,
  MinimizedViewComponent,
  TableIconComponent,
  PdfViewComponent,
  LinkComponent
];

const PIPES = [
  SatinizerPipe,
];

const ENTRY_COMPONENTS = [
  ItemDetailComponent,
  PdfViewComponent
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  exports: [MaterialModule, ...COMPONENTS, ...PIPES, ReactiveFormsModule, FormsModule, PdfViewerModule],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [],
})
export class SharedModule { }
