import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainGeneralService } from 'src/app/core/services/main/general.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit, OnDestroy {

  constructor(
    private mainGeneralService: MainGeneralService
  ) {
  }

  ngOnInit() {
  this.mainGeneralService.viewTransparencyButton = false;
  }

  ngOnDestroy() {
    this.mainGeneralService.viewTransparencyButton = true;
  }

}
