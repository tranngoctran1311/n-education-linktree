import { ReactNode } from 'react';

export interface LinkData {
  id: string;
  label: string;
  href: string;
  iconSvg: ReactNode;
  containerHoverClass: string;
  iconHoverClass: string;
  iconColorClass?: string;
}

export interface EventData {
  title: string;
  date: string;
  location: string;
  link: string;
}