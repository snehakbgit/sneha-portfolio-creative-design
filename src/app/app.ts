import { Component } from '@angular/core';
import { NavbarComponent }   from './components/navbar/navbar';
import { HeroComponent }     from './components/hero/hero';
import { AboutComponent }    from './components/about/about';
import { ProjectsComponent } from './components/projects/projects';
import { ServicesComponent } from './components/services/services';
import { SkillsComponent }   from './components/skills/skills';
import { ContactComponent }  from './components/contact/contact';
import { FooterComponent }   from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    ServicesComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
})
export class AppComponent {}
