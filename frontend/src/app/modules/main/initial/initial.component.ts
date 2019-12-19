import { Component, OnInit, OnDestroy } from '@angular/core';
import { MainGeneralService } from '../../../core/services/main/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit, OnDestroy {

  constructor(
    private mainGeneralService: MainGeneralService,
    private router: Router
  ) {
  }

  ngOnInit() {
  this.mainGeneralService.viewTransparencyButton = false;
  }

  ngOnDestroy() {
    this.mainGeneralService.viewTransparencyButton = true;
  }

}
