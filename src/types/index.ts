// Domain Types

export interface Service {
  id: string;
  title: string;
  description: string;
  priceFrom: number;
  priceUnit: string;
  imageUrl: string;
  features?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  content: string;
  rating: number;
  initials: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  privacy: boolean;
}

export interface BookingRequest {
  id: string;
  serviceId: string;
  userId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface User {
  id: number;
  username: string;
  email?: string;
  role?: 'user' | 'admin';
  createdAt?: string;
}

// Auth Types
export interface LoginCredentials {
  username: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string[]>;
}
