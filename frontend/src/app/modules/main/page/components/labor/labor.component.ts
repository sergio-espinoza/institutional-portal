import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/core/services/page/page.service';

@Component({
  selector: 'app-labor',
  templateUrl: './labor.component.html',
  styleUrls: ['./labor.component.css']
})
export class LaborComponent implements OnInit {
  constructor(
    private pageService: PageService
  ) { }

  ngOnInit() {
    this.pageService.setPageData({ title: 'Oportunidad Laboral', subtitle: 'Oportunidades Laborales' });
  }

}
