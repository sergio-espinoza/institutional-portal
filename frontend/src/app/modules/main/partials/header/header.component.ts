import { Component, OnInit } from '@angular/core';
import { headerLinks } from './data.header';
import { InfoModel } from 'src/app/shared/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerLinks: InfoModel[] = headerLinks;

  constructor() { }

  ngOnInit() {
  }

}
