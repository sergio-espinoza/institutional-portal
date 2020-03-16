import { Component, OnInit } from '@angular/core';
import { ExpansionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-frecuent-link',
  templateUrl: './frecuent-link.component.html',
  styleUrls: ['./frecuent-link.component.css']
})
export class FrecuentLinkComponent implements OnInit {
  public frecuentLinks: ExpansionModel[] = [
    { title: 'Visión y Mision', description: 'Vínculo a la vista de Visión y Mision', icon: 'monetization_on' , path: '/main/page/vission-mission'},
    { title: 'Estructura Orgánica', description: 'Vínculo a la vista de Visión y Mision', icon: 'thumb_up' , path: '/main/group/documents/organic-structure'},
    { title: 'Mensaje del Alcalde', description: 'Vínculo a la página del Mensaje del Alcalde.', icon: 'group' , path: '/main/page'},
    { title: 'Coordinación de Regidores', description: 'Vínculo a la página del Coordinación de Regidores.', icon: 'search' ,
      path: '/main/page/coordination-council' },
  ];

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
