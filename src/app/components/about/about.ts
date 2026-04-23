import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
})
export class AboutComponent {
  stats = [
    { value: '48+', label: 'Projects Delivered' },
    { value: '25+', label: 'Happy Clients' },
    { value: '4',   label: 'Years Experience' },
    { value: '6',   label: 'Awards' },
  ];

  galleryItems = [
    { emoji: '🎨', label: 'Brand' },
    { emoji: '✏️', label: 'Sketch' },
    { emoji: '💡', label: 'Ideas' },
    { emoji: '🖼️', label: 'Design' },
  ];
}
