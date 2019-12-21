import { Component, OnInit } from '@angular/core';
import { LinkListModel } from 'src/app/shared/models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contactLinkData: LinkListModel = { icon: 'phone', title: '(+100) 123 456 789 0', subtitle: 'CALL US NOW' };

  constructor() { }

  ngOnInit() {
  }

}
