import { Component } from '@angular/core';
import { Skill } from 'src/app/interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  public skills: Skill[] = [
    {
      skill:'Html',
      percent: 95,
      icon: 'fa-brands fa-html5',
      color: 'orange'
    },{
      skill:'Css',
      percent: 85,
      icon: 'fa-brands fa-css3-alt',
      color: 'blue'
    },{
      skill:'JavaScript',
      percent: 75,
      icon: 'fa-brands fa-js',
      color: 'black'
    },{
      skill:'Angular',
      percent: 70,
      icon: 'fa-brands fa-angular',
      color: 'red'
    },{
      skill:'GitHub',
      percent: 65,
      icon: 'fa-brands fa-github'
    }

  ];


}
