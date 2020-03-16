import { Component, OnInit } from '@angular/core';
import { SectionModel, IAddressHttpModel, AddressModel } from '../../../../../shared/models';
import {
  LinksGroupHttpService
} from '../../../../../core/http/group/links/links.http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  public sectionData: SectionModel = {
    title: '',
    background: 'https://i.imgur.com/CNEp4ur.png'
  };

  public addresses: AddressModel[];
  public displayedColumns: string[];

  constructor(
    private httpLinks: LinksGroupHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAddresses();
  }

  private getAddresses(): void {
    this.route.paramMap.subscribe(
      (params: ParamMap) => this.httpLinks.getAddresses(params.get('id')).subscribe(
        (addressesSourceHttp: IAddressHttpModel) => {
          this.addresses = addressesSourceHttp.addresses;
          this.displayedColumns = addressesSourceHttp.format;
          this.sectionData.title = addressesSourceHttp.title;
        })
    );
  }

}
