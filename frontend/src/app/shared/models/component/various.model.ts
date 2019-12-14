import { MatMenuPanel } from '@angular/material/menu';

export class MenuButtonModel {
  triggerfor?: MatMenuPanel<any>;
  path?: string;
  icon?: string;
  title?: string;
}

export class InfoModel {
  icon?: string;
  title?: string;
  path?: string;
  color?: string;
  className?: string;
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
