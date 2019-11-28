import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  InfoComponent,
  NotificationComponent,
  ItemDetailComponent,
  MenuBasicComponent,
  LinkListComponent,
  MinimizedViewComponent
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

];

const PIPES = [
  SatinizerPipe,
];

const ENTRY_COMPONENTS = [
  ItemDetailComponent
];

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,

  ],
  exports: [MaterialModule, ...COMPONENTS, ...PIPES, ReactiveFormsModule, FormsModule],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [],
})
export class SharedModule { }
