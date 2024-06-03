import { Component, OnInit } from '@angular/core';
import { CERTIFICATES, EDUCATION, EXPERIENCIA } from 'db/db-about-me';
import { AboutMe } from 'src/app/interfaces';

interface DataPersonal {
  title: string;
  icon: string;
  data: AboutMe[],
}

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeComponent implements OnInit {

  ngOnInit(): void {}

  public dataPersonal: DataPersonal[] = [
    {
      title: 'Experiencia',
      icon: 'fa-sharp fa-solid fa-medal fa-2xl',
      data: EXPERIENCIA,
    },{
      title: 'Educación',
      icon: 'fa-sharp fa-solid fa-graduation-cap fa-2xl',
      data: EDUCATION,
    }
  ];

  public certificates: AboutMe[] = CERTIFICATES;
}