export class DocumentModel {
  constructor(
    public name?: string,
    public size?: string,
    public createdat?: Date | string | number,
    public src?: string,
    public iconType?: string
  ) {
    this.iconType = iconType ? iconType : 'picture_as_pdf';
  }
}

// This will be in PageModule, not in GroupModule
export class DirectoryModel {
  constructor(
    public dependence?: string,
    public representative?: string,
    public email?: string,
    public phone?: string,
    public annexes?: number
  ) { }
}

export class AddressesModel {
  constructor(
    public id?: number,
    public name?: string,
    public urlIcon?: {
      icon: string,
      url: string
    }
  ) { }
}

export class DocumentGroupServiceModel {
  constructor(
    public regulations?: DocumentModel[],
    public ordinances?: DocumentModel[],
    public agreements?: DocumentModel[],
    public ordinaryMinutes?: DocumentModel[],
    public extraordinaryMinutes?: DocumentModel[],
    public ordinaryAgenda?: DocumentModel[],
    public extraordinaryAgenda?: DocumentModel[],
    public managements?: DocumentModel[],
    public identityManual?: DocumentModel[]
  ) { }
}

export class LinkGroupServiceModel {
  constructor(
    public addresses?: AddressesModel[],
    public directory?: DirectoryModel[],
  ) { }
}

