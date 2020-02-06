
import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WindowRefsService {
  constructor() {
  }

  getWindow(): Window {
    return window;
  }
}
