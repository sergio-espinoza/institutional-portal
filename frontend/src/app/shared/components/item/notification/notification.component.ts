import { Component, OnInit, Input } from '@angular/core';
import { NotificationItemModel } from '../../../models';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notificationItemData: NotificationItemModel;
  @Input() alignAction: 'end' | 'start' = 'end';


  constructor() { }

  ngOnInit() {
  }

}
