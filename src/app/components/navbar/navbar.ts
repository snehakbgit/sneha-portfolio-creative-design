import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.html',
})
export class NavbarComponent {
  isDark = signal(false);
  menuOpen = signal(false);
  scrolled = signal(false);

  navLinks = ['Home', 'About', 'Projects', 'Services', 'Skills', 'Contact'];

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 30);
  }

  toggleTheme() {
    this.isDark.update(v => !v);
    document.documentElement.classList.toggle('dark');
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  scrollTo(section: string) {
    const el = document.getElementById(section.toLowerCase());
    el?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen.set(false);
  }
}
