import { Component, Input } from '@angular/core';
import { ListServices } from 'src/app/interfaces/services-list.interface';

@Component({
  selector: 'app-services',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.scss'],
})
export class ServicesComponent {

  @Input({required: true}) listServices: ListServices[] = [];

}
