import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators as vl, FormControl, FormBuilder } from '@angular/forms';
import { LinkModel, LinkListModel, SavageModel } from 'src/app/shared/models';
import { IconService } from 'src/app/core/services/icon/icon.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  formHeader: FormGroup = this.fb.group({
    emailHeader: this.fb.control('', [vl.email, vl.required])
  });
  formContent: FormGroup = this.fb.group({
    emailContent: this.fb.control('', [vl.email, vl.required]),
    messageContent: this.fb.control('', [vl.required])
  });

  contactsLinkData: LinkListModel[] = [
    { title: '2903 Avenue Z, Brooklyn, NY', icon: 'location_on' },
    { title: '(+100) 123 456 7890', icon: 'phone' },
    { title: 'contact@housekey.com', icon: 'email' },
    { title: 'Mon - Sun / 9:00AM - 8:00PM', icon: 'schedule' },

  ];

  socialLinkData: { link: LinkModel, icon: SavageModel }[] = [
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://facebook.com' },
      icon: { fill: '#262626', d: this.iconService.getIcon('facebook') }
    },
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://twitter.com' },
      icon: { fill: '#262626', d: this.iconService.getIcon('twitter') }
    },
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://instagram.com' },
      icon: { fill: '#262626', d: this.iconService.getIcon('instagram') }
    },
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://gmail.com' },
      icon: { fill: '#262626', d: this.iconService.getIcon('gmail') }
    },
  ];

  constructor(
    private fb: FormBuilder,
    private iconService: IconService
  ) { }

  ngOnInit() {
  }

}
