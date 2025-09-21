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
      percent: 90,
      srcImage: `${this.pathImage}/angular.gif`,
    },{
      nameSkill:'POSTGRES',
      percent: 80,
      srcImage: `${this.pathImage}/postgresql.png`,
    },{
      nameSkill: 'NODE.JS',
      percent: 75,
      srcImage: `${this.pathImage}/nodejs.png`,
    },{
      nameSkill: 'JAVA',
      percent: 67,
      srcImage: `${this.pathImage}/java.png`,
    },{
      nameSkill: '.Net Core',
      percent: 78,
      srcImage: `${this.pathImage}/dotnetcore.png`,
    },{
      nameSkill: 'Nest',
      percent: 58,
      srcImage: `${this.pathImage}/nest.png`,
    },{
      nameSkill: 'Docker',
      percent: 50,
      srcImage: `${this.pathImage}/docker.png`,
    },
  ];


}
