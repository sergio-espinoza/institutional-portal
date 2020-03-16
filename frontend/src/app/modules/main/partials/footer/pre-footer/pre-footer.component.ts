import { Component } from '@angular/core';
import { LinkListModel } from '../../../../../shared/models';

@Component({
  selector: 'app-pre-footer',
  templateUrl: './pre-footer.component.html',
  styleUrls: ['./pre-footer.component.css']
})
export class PreFooterComponent {
  public contactLinkData: LinkListModel = {
    icon: 'phone',
    title: '(+51) 064 782 341',
    subtitle: 'Llamar Ahora' };

  public fontSize: { icon: number, title: number, subtitle: number } = {
    icon: 48, title: 21, subtitle: 14 };
}
