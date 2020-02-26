import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../../shared/shared.module';

import {
  InitialComponent,
  TransparencyDocumentComponent,
  TransparencyLinksComponent,
  SectionMayorComponent,
  GalleryInitialComponent,
  GoalComponent,
  FrecuentLinkComponent,
  ProfilesComponent
} from './initial';

import {
  HeaderComponent,
  HorizontalMenuComponent,
  VerticalMenuComponent,
  HorizontalMenuItemComponent,
  VerticalMenuItemComponent,
  SidebarComponent,
  PreFooterComponent,
  FooterComponent,
} from './partials';


@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    HorizontalMenuItemComponent,
    VerticalMenuItemComponent,
    SidebarComponent,
    PreFooterComponent,
    FooterComponent,
    InitialComponent,
    TransparencyDocumentComponent,
    TransparencyLinksComponent,
    SectionMayorComponent,
    GalleryInitialComponent,
    GoalComponent,
    FrecuentLinkComponent,
    ProfilesComponent,
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
