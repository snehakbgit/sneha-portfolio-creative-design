import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
})
export class ContactComponent {
  form = { name: '', email: '', message: '' };
  submitted = signal(false);
  loading = signal(false);

  onSubmit() {
    if (!this.form.name || !this.form.email || !this.form.message) return;
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.form = { name: '', email: '', message: '' };
      setTimeout(() => this.submitted.set(false), 4000);
    }, 1000);
  }

  socials = [
    { icon: '📸', label: 'Instagram' },
    { icon: '🎨', label: 'Dribbble' },
    { icon: '🐦', label: 'Twitter' },
    { icon: '💼', label: 'LinkedIn' },
  ];
}
