import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  classNameContentSpinner = '';

  constructor(
    private router: Router
    ) {
      this.onNavigation();
  }

  onNavigation(): void {
    this.router.events.subscribe((eventRouter: Event) => {
      if (eventRouter instanceof NavigationEnd) {
        this.classNameContentSpinner = 'hide';
      }
    });
  }
}
