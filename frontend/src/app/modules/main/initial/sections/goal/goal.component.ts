import { Component, OnInit } from '@angular/core';
import { ExpansionModel, SectionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goalData: ExpansionModel[] = [
    {
      title: 'Desarrollo Económico',
      description: 'Aumento de la calidad de Vida del Poblador',
      icon: 'monetization_on'
    },
    {
      title: 'Aprobación del Pueblo',
      description: 'Satisfacción y comodidad de la comunidad',
      icon: 'thumb_up'
    },
    {
      title: 'Bienestar',
      description: 'Velar por la salud e integridad del poblador.',
      icon: 'group'
    },
    {
      title: 'Mejora Perpetua',
      description: 'Toda la mejora será de forma permanente.',
      icon: 'search'
    },
  ];

  sectionMissionData: SectionModel = {
    title: 'Objetivos y Metas',
    background: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
