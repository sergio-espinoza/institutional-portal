import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './partials/header/header.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { InitialComponent } from './initial/initial.component';
import { TransparencyDocumentComponent } from './initial/transparency-document/transparency-document.component';
import { TransparencyLinksComponent } from './initial/transparency-links/transparency-links.component';
import { SectionMayorComponent } from './initial/sections/personal-say/personal-say.component';
import { GalleryInitialComponent } from './initial/sections/gallery-initial/gallery-initial.component';
import { GoalComponent } from './initial/sections/goal/goal.component';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    InitialComponent,
    TransparencyDocumentComponent,
    TransparencyLinksComponent,
    SectionMayorComponent,
    GalleryInitialComponent,
    GoalComponent
  ],
  entryComponents: [
    TransparencyDocumentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
