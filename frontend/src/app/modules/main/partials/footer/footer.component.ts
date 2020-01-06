import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators as vl, FormControl, FormBuilder } from '@angular/forms';
import { LinkModel, LinkListModel, SavageModel } from '../../../../shared/models';
import { IconService } from '../../../../core/services/icon/icon.service';

const urlMapSource = 'https://maps.google.com/maps?width=100%&amp;height=3500&amp;hl=en&amp;' +
  'coord=-11.20419495,-76.28550543084211&amp;q=Plaza%2BPrincipal%2BSanta%2BB%C3%A1rbara%2' +
  'Bde%2BCarhuacay%C3%A1n+(Santa%20B%C3%A1rbara%20de%20Carhuacay%C3%A1n)&amp;ie=UTF8&amp;' +
  't=&amp;z=14&amp;iwloc=B&amp;output=embed';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  urlMap = urlMapSource;

  formHeader: FormGroup = this.fb.group({
    emailHeader: this.fb.control('', [vl.email, vl.required])
  });
  formContent: FormGroup = this.fb.group({
    emailContent: this.fb.control('', [vl.email, vl.required]),
    messageContent: this.fb.control('', [vl.required])
  });

  contactsLinkData: LinkListModel[] = [
    { title: 'Plaza Principal Santa Bárbara de Carhuacaýan', icon: 'location_on' },
    { title: '(+51) 064 830 006', icon: 'phone' },
    { title: '(+51) 064 811 251', icon: 'phone' },
    { title: 'contact@munisbc.com', icon: 'email' },
    { title: 'Lunes - Viernes / 9:00AM - 8:00PM', icon: 'schedule' },

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
