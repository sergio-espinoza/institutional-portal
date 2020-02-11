import { Component, OnInit } from '@angular/core';
import { PageService } from '../../../core/services/page/page.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  groupTitle = 'Group Module';
  groupSubtitle = 'Group Module';

  constructor(
    public pageService: PageService
  ) { }

  ngOnInit() {
  }

  setPageData(sectionTitleOfChild: string) {
    this.groupTitle = sectionTitleOfChild;
  }

}
