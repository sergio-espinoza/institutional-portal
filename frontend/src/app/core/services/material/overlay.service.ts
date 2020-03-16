import {
  Injectable,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  PositionStrategy
} from '@angular/cdk/overlay';

import { TemplatePortal } from '@angular/cdk/portal';

@Injectable( {providedIn: 'root' })
export class OverlayService {
  constructor(
    private overlay: Overlay
  ) { }

  public createOverlay(config: OverlayConfig): OverlayRef {
    return this.overlay.create(config);
  }

  public attachTemplatePortal(
    overlayRef: OverlayRef,
    templateRef: TemplateRef<any>,
    vcRef: ViewContainerRef) {

    const templatePortal = new TemplatePortal(templateRef, vcRef);
    overlayRef.attach(templatePortal);
  }

  public positionGloballyCenter(): PositionStrategy {
    return this.overlay.position()
      .global()
      .centerVertically()
      .centerVertically();
  }

}
