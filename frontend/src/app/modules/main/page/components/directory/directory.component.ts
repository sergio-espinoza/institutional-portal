import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../../../shared/models';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  sectionData: SectionModel = {
    title: 'Directory',
    background: 'https://i.imgur.com/CNEp4ur.png'
  };


  constructor() { }

  ngOnInit() {
  }

}
