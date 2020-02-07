import { Component, OnInit } from '@angular/core';

import { profilesData } from './profiles.data';
import { ProfileModel } from '../../../../../shared/models';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  profilesList: ProfileModel[] = profilesData;

  constructor() { }

  ngOnInit() {
  }

}
