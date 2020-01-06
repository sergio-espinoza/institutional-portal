import { Injectable, Inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class WindowService {
  constructor() {
  }

  getWindow(): Window {
    return window;
  }
}
