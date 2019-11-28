import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'satinizer'
})
export class SatinizerPipe implements PipeTransform {
  private bypassObject = {
    html: this.satinizer.bypassSecurityTrustHtml,
    style: this.satinizer.bypassSecurityTrustStyle,
    script: this.satinizer.bypassSecurityTrustScript,
    url: this.satinizer.bypassSecurityTrustUrl,
    resourceUrl: this.satinizer.bypassSecurityTrustResourceUrl
  };

  constructor(
    private satinizer: DomSanitizer
  ) { }

  transform(value: any, type: string): any {
    return this.bypassObject[type](value);
  }

}
