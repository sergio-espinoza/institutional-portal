import { Component } from '@angular/core';
import { DocumentService } from './core/services/api-local/document.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { WindowService } from './core/services/api-local/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private documentService: DocumentService,
    private windowService: WindowService,
    private router: Router
  ) {
    this.onNavigationEnd();
  }

  onNavigationEnd(): void {
    this.router.events.subscribe(
      (navigationEvent: Event) => {
        if (navigationEvent instanceof NavigationEnd) {
          this.documentService.document.getElementById('preloader').className = '.content-spinner hide';
          this.windowService.getWindow().scroll(0, 0);
        }
      }
    );
  }
}


