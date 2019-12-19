import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  @Input() className: 'icon' | 'mixed' | 'letter' = 'mixed';
  @Input() properties = {
    color: '#ffffff',
    path: 'https://www.google.com'
  };

  constructor() { }

  ngOnInit() {

  }

}
