import { Component, OnInit } from '@angular/core';
import { SectionModel } from '../../../../../shared/models';
import { PageService } from '../../../../../core/services/page/page.service';
import { DirectoryCouncilModel, directoryCouncilList } from './directory-council.data';

@Component({
  selector: 'app-directory-council',
  templateUrl: './directory-council.component.html',
  styleUrls: ['./directory-council.component.css']
})
export class DirectoryCouncilComponent implements OnInit {
  public sectionData: SectionModel = {
    title: 'Directorio de Regidores',
    background: 'https://i.imgur.com/hombPA3.jpg'
  }

  public directoryCouncilList: DirectoryCouncilModel[] = directoryCouncilList;

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit(): void {
  }

}
