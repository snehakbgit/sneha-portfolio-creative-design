import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  category: string;
  date: string;
  color: string;
  emoji: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class ProjectsComponent {
  hoveredIndex = signal<number | null>(null);

  projects: Project[] = [
    { title: 'Bloom Tea Packaging',    category: 'Branding',   date: 'May 2024',   color: 'from-[#fce8ec] to-[#f4b8c8]', emoji: '🌸' },
    { title: 'Mindful App UI Design',  category: 'UI/UX',      date: 'April 2024', color: 'from-[#6b2fa0] to-[#9b59b6]', emoji: '🐠' },
    { title: 'Nature Whisper',         category: 'Illustration',date: 'March 2024',color: 'from-[#e8f5e9] to-[#c8e6c9]', emoji: '🌿' },
    { title: 'Interior Studio Website',category: 'Web Design',  date: 'Feb 2024',  color: 'from-[#f5f5f0] to-[#e8e4d8]', emoji: '🏛️' },
  ];
}
