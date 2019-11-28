import { Component, OnInit, Input } from '@angular/core';
import { LinkListModel } from '../../../models';

@Component({
  selector: 'app-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent implements OnInit {
  @Input() title = '';
  @Input() listLinks: LinkListModel[];

  constructor() { }

  ngOnInit() {
  }

}
