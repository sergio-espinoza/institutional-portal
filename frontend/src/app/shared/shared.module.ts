import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  InfoComponent,
  NotificationComponent,
  ItemDetailComponent,
  MenuBasicComponent
} from './components';


const COMPONENTS = [
  InfoComponent,
  NotificationComponent,
  ItemDetailComponent,
  MenuBasicComponent
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
  exports: [MaterialModule, ...COMPONENTS, ReactiveFormsModule, FormsModule],
  declarations: [...COMPONENTS],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [],
})
export class SharedModule { }
