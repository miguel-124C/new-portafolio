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
      percent: 90,
      srcImage: `${this.pathImage}/css.png`,
    },{
      nameSkill:'JAVASCRIPT',
      percent: 90,
      srcImage: `${this.pathImage}/javascript.png`,
    },{
      nameSkill:'ANGULAR',
      percent: 88,
      srcImage: `${this.pathImage}/angular.gif`,
    },{
      nameSkill:'GitHub',
      percent: 70,
      srcImage: `${this.pathImage}/github.png`,
    },{
      nameSkill:'POSTGRES',
      percent: 75,
      srcImage: `${this.pathImage}/postgresql.png`,
    },{
      nameSkill: 'JAVA',
      percent: 60,
      srcImage: `${this.pathImage}/java.png`,
    },{
      nameSkill: 'NODE.JS',
      percent: 65,
      srcImage: `${this.pathImage}/nodejs.png`,
    },{
      nameSkill: 'C#',
      percent: 60,
      srcImage: `${this.pathImage}/c-sharp.png`,
    },

  ];


}
