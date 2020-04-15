import { Component, OnInit } from '@angular/core';
import { SectionModel, IAddressHttpModel } from '../../../../shared/models';
import { Observable } from 'rxjs';
import { LinksGroupHttpService } from '../../../../core/http/group/links/links.http.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksGroupComponent implements OnInit {

  public addressSources$: Observable<IAddressHttpModel>;
  public srcSelected = '';
  public sectionData: SectionModel = {
    title: 'Direcciones',
    background: 'https://i.imgur.com/hombPA3.jpg'
  };
  public displayedColumns: string[] = [ 'name', 'size' ];

  constructor(
    private dgHttpService: LinksGroupHttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getAddresses();
  }

  private getAddresses(): void {
    this.addressSources$ = this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('id')),
      switchMap((id: string) => this.dgHttpService.getAddresses(id))
    );
  }

}
