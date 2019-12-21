import { Injectable } from '@angular/core';
import { icons } from './icon.svg';

@Injectable({ providedIn: 'root' })
export class IconService {
  getIcon(name: string): string {
    return icons[name];
  }

  constructor() { }

}
