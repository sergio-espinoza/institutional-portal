import { Component, OnInit, Input } from '@angular/core';
import { ProfileModel } from '../../../../shared/models';
import { IconService } from '../../../../core/services/icon/icon.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() profileData: ProfileModel = {
    image: 'https://i.imgur.com/CgsKzn8.jpg',
    name: 'Lusia Masiel',
    rating: 0,
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum fugiat impedit temporsssa,
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum fugiat impedit temporsssa,
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum fugiat impedit temporsssa,
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Illum fugiat impedit temporsssa,
                  Illum fugiat impedit temporsssa,
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  `,
    contactLinks: [
      { title: 'Housekey', icon: 'apartment' },
      { title: 'lusia.m@munisbc.com', icon: 'email' },
      { title: '(224)267-1346', icon: 'phone' },
    ],
    socialLinks: [
      { link: { color: '#ffffff', path: 'https://facebook.com'},
        icon: { fill: 'rgba(0, 0, 0, .54)',
                d: IconService.getIcon('facebook') },
      },
      {
        link: { color: '#ffffff', path: 'https://twitter.com'},
        icon: { fill: 'rgba(0, 0, 0, .54)',
                d: IconService.getIcon('twitter') },
      },
      {
        link: { color: '#ffffff', path: 'https://www.instagram.com'},
        icon: { fill: 'rgba(0, 0, 0, .54)',
                d: IconService.getIcon('instagram') },
      },
      {
        link: { color: '#ffffff', path: 'https://mail.google.com'},
        icon: { fill: 'rgba(0, 0, 0, .54)',
                d: IconService.getIcon('gmail') }
      }
    ],
    path: 'main/document'
  };

  constructor(
  ) { }

  ngOnInit() {
  }

}
