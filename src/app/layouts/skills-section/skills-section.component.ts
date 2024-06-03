import { Component } from '@angular/core';
import { Skill } from 'src/app/interfaces';

@Component({
  selector: 'app-skills',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsComponent {

  private pathImage: string = 'assets/img/skill'

  public skills: Skill[] = [
    {
      nameSkill:'HTML',
      percent: 96,
      srcImage: `${this.pathImage}/html.png`,
    },{
      nameSkill:'CSS',
      percent: 87,
      srcImage: `${this.pathImage}/css.png`,
    },{
      nameSkill:'JAVASCRIPT',
      percent: 90,
      srcImage: `${this.pathImage}/javascript.png`,
    },{
      nameSkill:'ANGULAR',
      percent: 80,
      srcImage: `${this.pathImage}/angular.png`,
    },{
      nameSkill:'GitHub',
      percent: 68,
      srcImage: `${this.pathImage}/github.png`,
    },{
      nameSkill:'POSTGRES',
      percent: 58,
      srcImage: `${this.pathImage}/postgresql.png`,
    },{
      nameSkill: 'JAVA',
      percent: 55,
      srcImage: `${this.pathImage}/java.png`,
    },{
      nameSkill: 'NODE.JS',
      percent: 62,
      srcImage: `${this.pathImage}/nodejs.png`,
    },{
      nameSkill: 'C#',
      percent: 51,
      srcImage: `${this.pathImage}/c-sharp.png`,
    },

  ];


}
