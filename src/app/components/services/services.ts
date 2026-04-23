import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
})
export class ServicesComponent {
  services = [
    { icon: '🎭', title: 'Brand Identity',      desc: 'Thoughtful logos, color systems and brand guidelines that feel like you.', color: 'bg-[#f4e0f4]' },
    { icon: '📱', title: 'UI / UX Design',       desc: 'Delightful interfaces for web & mobile — wireframes to polished prototypes.', color: 'bg-[#fce8ec]' },
    { icon: '🌿', title: 'Illustration',         desc: 'Custom illustrations, character art and editorial visuals with a soft touch.', color: 'bg-[#e8f4e8]' },
    { icon: '📦', title: 'Packaging Design',     desc: 'Physical & digital packaging that invites the first smile before unboxing.', color: 'bg-[#fff4e0]' },
    { icon: '🌐', title: 'Web Design',           desc: 'Aesthetic, responsive websites built with storytelling at the center.', color: 'bg-[#fce8ec]' },
    { icon: '✨', title: 'Art Direction',        desc: 'Shaping the visual soul of a project — from mood to the final frame.', color: 'bg-[#f4e0ec]' },
  ];
}
