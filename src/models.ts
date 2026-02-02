export interface Speaker {
  id: number;
  name: string;
  role: string;
  photoUrl: string | null;
  scale: number;
}

export interface PosterData {
  layout: '1-speaker' | '2-speakers';
  topLogosUrl: string | null;
  logoScale: number;
  title: string;
  subtitle: string;
  tagline: string;
  date: {
    day: string;
    month: string;
    time: string;
  };
  location: {
    line1: string;
    line2: string;
    line3: string;
  };
  speakers: Speaker[];
  footer: {
    instagram: string;
    contact: string;
  };
  eventDetailsPosition: {
    x: number;
    y: number;
  };
  dateOffset: {
    x: number;
    y: number;
  };
  locationOffset: {
    x: number;
    y: number;
  };
  taglinePosition: {
    x: number;
    y: number;
  };
  taglineScale: number;
}
