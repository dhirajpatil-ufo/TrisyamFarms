import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  beliefs = [
    {
      icon: 'bi-tree',
      title: 'Sustainable Farming',
      description: 'We use eco-friendly methods that respect nature and ensure long-term sustainability.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Hygiene & Quality Control',
      description: 'Strict quality checks at every stage of cultivation and packaging.'
    },
    {
      icon: 'bi-truck',
      title: 'Fresh Harvest & Quick Supply',
      description: 'From farm to your table in minimal time to preserve freshness.'
    },
    {
      icon: 'bi-people',
      title: 'Long-term Relationships',
      description: 'Building trust and lasting partnerships with our customers.'
    }
  ];

  milestones = [
    { year: '2023', title: 'Farm Establishment', description: 'Started our mushroom farming venture' },
    { year: '2024', title: 'Quality Certification', description: 'Implemented quality control systems' },
    { year: '2024', title: 'Market Expansion', description: 'Started supplying to hotels and restaurants' },
    { year: '2025', title: 'Farm Expansion', description: 'Increased production capacity' }
  ];
}
