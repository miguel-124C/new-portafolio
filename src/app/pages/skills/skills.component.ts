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
      nameSkill:'Html',
      percent: 95,
      icon: 'fa-brands fa-html5',
      color: 'rgb(221, 122, 0)'
    },{
      nameSkill:'Css',
      percent: 85,
      icon: 'fa-brands fa-css3-alt',
      color: '#25f'
    },{
      nameSkill:'JavaScript',
      percent: 75,
      icon: 'fa-brands fa-js',
      color: 'yellow'
    },{
      nameSkill:'Angular',
      percent: 70,
      icon: 'fa-brands fa-angular',
      color: 'red'
    },{
      nameSkill:'GitHub',
      percent: 65,
      icon: 'fa-brands fa-github',
      color: '#fff'
    }

  ];


}
