import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Wokrs } from 'src/app/interfaces';

@Component({
  selector: 'c-preview-proyect',
  templateUrl: './preview-proyect.html',
  styleUrls: ['./preview-proyect.scss'],
})
export class PreviewProyectComponent {

  private _proyect!: Wokrs;
  public safeHref!: SafeResourceUrl;

  @Input()
  set proyect(value: Wokrs) {
    this._proyect = value;
    // sanitize once when the input changes, avoids creating a new object on every CD cycle
    this.safeHref = this.sanitizer.bypassSecurityTrustResourceUrl(value.hrefDemo);
  }
  get proyect(): Wokrs {
    return this._proyect;
  }

  constructor(private sanitizer: DomSanitizer) {}

  // no getter required anymore
}