import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/core/services/page/page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor(
    public pageService: PageService
  ) { }

  ngOnInit() {
  }
}
