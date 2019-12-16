import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  InfoComponent,
  NotificationComponent,
  ItemDetailComponent,
  MenuBasicComponent,
  LinkListComponent,
  MinimizedViewComponent,
  TableIconComponent,
  PdfViewComponent,
  LinkComponent,
  LogoComponent,
  BannerComponent,
  SectionComponent,
  IconComponent,
  ExpansionComponent,
  BottomSheetComponent,
  PersonalSayComponent
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
  LinkComponent,
  LogoComponent,
  SectionComponent,
  BannerComponent,
  IconComponent,
  ExpansionComponent,
  BottomSheetComponent,
  PersonalSayComponent
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
    RouterModule
  ],
  exports: [MaterialModule, ...COMPONENTS, ...PIPES, ReactiveFormsModule, FormsModule],
  declarations: [...COMPONENTS, ...PIPES],
  entryComponents: [...ENTRY_COMPONENTS],
  providers: [],
})
export class SharedModule { }
