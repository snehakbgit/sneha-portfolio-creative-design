import { Component, OnInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
})
export class SkillsComponent implements OnInit {
  animated = false;

  tools = [
    { name: 'Figma',             pct: 95 },
    { name: 'Adobe Illustrator', pct: 92 },
    { name: 'Adobe Photoshop',   pct: 90 },
    { name: 'Procreate',         pct: 88 },
  ];

  crafts = [
    { name: 'Branding',    pct: 94 },
    { name: 'UI / UX',     pct: 90 },
    { name: 'Illustration',pct: 93 },
    { name: 'Typography',  pct: 87 },
  ];

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) { this.animated = true; } },
      { threshold: 0.3 }
    );
    observer.observe(this.el.nativeElement);
  }
}
