import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class FooterComponent {
  navLinks = ['Home', 'About', 'Projects', 'Services'];

  scrollTo(section: string) {
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  }
}
