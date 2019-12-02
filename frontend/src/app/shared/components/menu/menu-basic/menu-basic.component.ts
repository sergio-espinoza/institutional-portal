import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-basic',
  templateUrl: './menu-basic.component.html',
  styleUrls: ['./menu-basic.component.css']
})
export class MenuBasicComponent implements OnInit {
  classSticky = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
