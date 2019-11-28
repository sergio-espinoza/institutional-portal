import { Component, OnInit, Input } from '@angular/core';
import { InfoModel } from '../../../models';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  @Input() infoData: InfoModel;
  constructor() { }

  ngOnInit() {
  }

}
