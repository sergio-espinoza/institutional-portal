import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators as vl, FormBuilder } from '@angular/forms';
import { LinkModel, LinkListModel, SavageModel } from '../../../../shared/models';
import { IconService } from '../../../../core/services/icon/icon.service';
import { LoggerService } from '../../../../core/logger.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [LoggerService]
})
export class FooterComponent implements OnInit {

  public formHeader: FormGroup = this.fb.group({
    emailHeader: this.fb.control('', [vl.email, vl.required])
  });
  public formContent: FormGroup = this.fb.group({
    emailContent: this.fb.control('', [vl.email, vl.required]),
    messageContent: this.fb.control('', [vl.required])
  });

  public contactsLinkData: LinkListModel[] = [
    { title: 'Main place Institutional Portal', icon: 'location_on' },
    { title: '(+51) 935 003 576', icon: 'phone' },
    { title: '(+51) 975 810 578', icon: 'phone' },
    { title: 'webmaster@institutionalportal.com', icon: 'email' },
    { title: 'Monday - Friday / 9:00AM - 8:00PM', icon: 'schedule' },
  ];

  public socialLinkData: { link: LinkModel, icon: SavageModel }[] = [
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://facebook.com' },
      icon: { fill: '#262626', d: IconService.getIcon('facebook') }
    },
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://twitter.com' },
      icon: { fill: '#262626', d: IconService.getIcon('twitter') }
    },
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://instagram.com' },
      icon: { fill: '#262626', d: IconService.getIcon('instagram') }
    },
    {
      link: { color: 'rgba(255, 255, 255, 0.7)', path: 'https://gmail.com' },
      icon: { fill: '#262626', d: IconService.getIcon('gmail') }
    },
  ];

  constructor(
    private fb: FormBuilder,
    private loggerService: LoggerService,
  ) { }

  ngOnInit(): void {
  }

  public toSubscribe(): void {
    this.sendFromForm(
      `Usuario con email ${this.formHeader.get('emailHeader').value} suscrito!!`,
      this.formHeader);
  }

  public sendMessage(): void {
    this.sendFromForm('Mensaje Enviado', this.formContent);
  }

  public sendFromForm(message: string, form: FormGroup): void {
    this.loggerService.log(message, 'mat-primary');
    form.reset();
  }

}
