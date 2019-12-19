import { MatMenuPanel } from '@angular/material/menu';

export class MenuButtonModel {
  triggerfor?: MatMenuPanel<any>;
  path?: string;
  icon?: string;
  title?: string;
}

export class InfoModel {
  constructor(
    public title?: string,
    public path?: string,
    public icon?: string,
    public color?: string,
    public className?: string
  ) {
    this.icon = icon ? icon : '';
    this.title = title ? title : '';
    this.path = path ? path : '';
    this.color = color ? color : '';
    this.className = className ? className : '';
  }
}

export class NotificationItemModel {
  title?: string;
  subtitle?: string;
  date?: Date |string | number;
  avatar?: string;
  image?: string;
  description?: string;
  className?: string;
}

export class ItemDetailModel {
  title?: string;
  description?: string;
  image?: string;
  date?: string;
}

export class LinkListModel {
  title?: string;
  subtitle?: string;
  icon?: string;
  path?: string;
}

export class MinimizedViewModel {
  title?: string;
  subtitle?: string;
  url?: string;
  type?: 'post' | 'page' | 'button';
}

export class ExpansionModel {
  title?: string;
  description?: string;
  icon?: string;
}

export class SectionModel {
  title?: string;
  background?: string;
}

export class PersonalSayModel {
  constructor(
    public src?: string,
    public alt?: string,
    public message?: string,
    public personalName?: string,
    public rol?: string
  ) {
    this.src = src ? src : 'https://i.imgur.com/vSa2MgS.jpg';
    this.alt = alt ? alt : 'person';
    this.message = message ? message : '';
    this.personalName = personalName ? personalName : 'MR(S) PERSONAL NAME';
    this.rol = rol ? rol : 'Software Developer';
  }
}


