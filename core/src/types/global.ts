// Przykładowe typy współdzielone

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Asset {
  id: string;
  type: 'image' | 'video' | 'audio';
  url: string;
  metadata?: Record<string, unknown>;
} 