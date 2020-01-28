import { Component, OnInit, Input } from '@angular/core';
import { SectionModel } from '../../models';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() sectionData: SectionModel = {
    title: 'How are people Saying',
    background: 'https://i.imgur.com/TZ8lanL.jpg'
  };

  @Input() className = 'normal';

  constructor(

  ) { }

  ngOnInit() { }
}
