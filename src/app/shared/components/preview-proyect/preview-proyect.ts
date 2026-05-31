import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Works } from 'src/app/interfaces';

@Component({
  selector: 'c-preview-proyect',
  templateUrl: './preview-proyect.html',
  styleUrls: ['./preview-proyect.scss'],
})
export class PreviewProyectComponent {

  private _proyect!: Works;
  public safeHref!: SafeResourceUrl;

  @Input()
  set proyect(value: Works) {
    this._proyect = value;
    // sanitize once when the input changes, avoids creating a new object on every CD cycle
    this.safeHref = (value.hrefDemo)
      ? this.sanitizer.bypassSecurityTrustResourceUrl(value.hrefDemo)
      : '';
  }

  get proyect(): Works {
    return this._proyect;
  }

  constructor(private sanitizer: DomSanitizer) {}

  // no getter required anymore
}