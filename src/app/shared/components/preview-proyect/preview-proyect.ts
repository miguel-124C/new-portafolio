import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Wokrs } from 'src/app/interfaces';

@Component({
  selector: 'c-preview-proyect',
  templateUrl: './preview-proyect.html',
  styleUrls: ['./preview-proyect.scss'],
})
export class PreviewProyectComponent {

  @Input()
  public proyect!: Wokrs;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeHref(hrefDemo: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(hrefDemo);
  }

}