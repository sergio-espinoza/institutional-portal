import { Component, OnInit, Input } from '@angular/core';
import { LinkModel } from '../../../../shared/models';


@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() className: 'icon' | 'mixed' | 'letter' = 'mixed';
  @Input() linkData: LinkModel = {
    color: '#ffffff',
    path: 'https://www.google.com'
  };

  constructor() { }

  ngOnInit() {

  }

}
