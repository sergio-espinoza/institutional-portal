import { Component, OnInit } from '@angular/core';
import { ExpansionModel, SectionModel } from 'src/app/shared/models';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goalData: ExpansionModel[] = [
    { title: 'Title 1', description: 'Description 1', icon: 'monetization_on' },
    { title: 'Title 2', description: 'Description 2', icon: 'thumb_up' },
    { title: 'Title 3', description: 'Description 3', icon: 'group' },
    { title: 'Title 4', description: 'Description 4', icon: 'search' },
  ];

  sectionMissionData: SectionModel = {
    title: 'Our Mission',
    background: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
