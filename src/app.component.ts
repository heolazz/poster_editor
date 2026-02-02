import { Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterPreviewComponent } from './components/poster-preview.component';
import { FormsModule } from '@angular/forms';
import { PosterData, Speaker } from './models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PosterPreviewComponent, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  // Initial State with Placeholder Data
  state = signal<PosterData>({
    layout: '1-speaker',
    topLogosUrl: 'https://placehold.co/600x100/white/333?text=Logos+Here', // Placeholder
    logoScale: 1.4,
    title: 'CV KAMU SUDAH\nATS FRIENDLY?',
    subtitle: 'Yuk cek & perbaiki bareng!',
    tagline: 'GRATIS\nUntuk Umum',
    date: {
      day: '8',
      month: 'FEBRUARI',
      time: '14.00 - 16.00 WITA',
    },
    location: {
      line1: 'Lt. 2 Ruang Pelatihan',
      line2: 'Rumah BUMN Makassar',
      line3: 'Jl. DR. Ratulangi, Mangkura, Kota Makassar',
    },
    speakers: [
      {
        id: 1,
        name: 'Pembicara 1',
        role: 'Co-Founder',
        photoUrl: 'https://placehold.co/400x500/png?text=Speaker+1',        
        scale: 1,
      },
      {
        id: 2,
        name: 'Pembicara 2',
        role: 'HR Specialist',
        photoUrl: 'https://placehold.co/400x500/png?text=Speaker+2',
        scale: 1,
      },
    ],
    footer: {
      instagram: '@rumahbumn.bri',
      contact: '0878 8999 0829',
    },
    eventDetailsPosition: {
      x: 0,
      y: -17, // Updated default as requested
    },
    dateOffset: {
      x: -25,
      y: 0,
    },
    locationOffset: {
      x: -10,
      y: 0,
    },
    taglinePosition: {
      x: 0,
      y: 6,
    },
    taglineScale: 0.8,
  });

  // Actions
  updateLayout(layout: '1-speaker' | '2-speakers') {
    this.state.update((s) => ({ ...s, layout }));
  }

  updateField(path: string, value: string | number) {
    this.state.update((s) => {
      const newState = { ...s };
      const parts = path.split('.');
      let current: any = newState;
      for (let i = 0; i < parts.length - 1; i++) {
        current = current[parts[i]];
      }
      current[parts[parts.length - 1]] = value;
      return newState;
    });
  }

  updateSpeaker(index: number, field: keyof Speaker, value: string | number) {
    this.state.update((s) => {
      const newSpeakers = [...s.speakers];
      newSpeakers[index] = { ...newSpeakers[index], [field]: value };
      return { ...s, speakers: newSpeakers };
    });
  }

  // File Handling
  onFileSelected(event: Event, target: 'logo' | 'speaker1' | 'speaker2') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        this.state.update((s) => {
          if (target === 'logo') return { ...s, topLogosUrl: result };
          if (target === 'speaker1') {
             const speakers = [...s.speakers];
             speakers[0] = { ...speakers[0], photoUrl: result };
             return { ...s, speakers };
          }
          if (target === 'speaker2') {
             const speakers = [...s.speakers];
             speakers[1] = { ...speakers[1], photoUrl: result };
             return { ...s, speakers };
          }
          return s;
        });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  triggerFileInput(id: string) {
    document.getElementById(id)?.click();
  }
}
