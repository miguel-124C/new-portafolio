import { Component } from '@angular/core';
import { Skill } from '../../interfaces/skill.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  public skills: Skill[] = [
    {
      skill:'Html',
      percent: 90,
      icon: 'fa-html5'
    },{
      skill:'Css',
      percent: 80,
      icon: 'fa-css3-alt'
    },{
      skill:'JavaScript',
      percent: 70,
      icon: 'fa-square-js'
    },{
      skill:'Angular',
      percent: 60,
      icon: 'fa-angular'
    },{
      skill:'GitHub',
      percent: 65,
      icon: 'fa-github'
    }

  ];


}
