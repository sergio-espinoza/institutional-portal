
import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WindowRefsService {
  constructor() {
  }

  public getWindow(): Window {
    return window;
  }
}
