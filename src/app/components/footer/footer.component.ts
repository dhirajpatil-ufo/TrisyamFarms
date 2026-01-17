import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { path: '/', label: 'Home', icon: 'bi-house' },
    { path: '/about', label: 'About Us', icon: 'bi-info-circle' },
    { path: '/products', label: 'Our Products', icon: 'bi-shop' },
    { path: '/gallery', label: 'Gallery', icon: 'bi-images' },
    { path: '/contact', label: 'Contact Us', icon: 'bi-telephone' }
  ];

  // Updated services array with proper descriptions
  services = [
    {
      label: 'Retail Supply',
      description: 'Household packs (250g, 500g, 1kg)'
    },
    {
      label: 'Hotel Supply',
      description: 'Commercial grade for restaurants'
    },
    {
      label: 'Wholesale',
      description: 'Bulk distribution'
    },
    {
      label: 'Bulk Orders',
      description: 'Custom requirements'
    },
    {
      label: 'Farm Fresh Delivery',
      description: 'Same day delivery available'
    }
  ];

  contactInfo = {
    address: 'Plot No. 2106, Tasgaon–Kavth Mahankal Road, Yogewadi, District Sangli, PIN – 416408',
    phone: '7631177171',
    whatsapp: '917631177171',
    email: 'trishyamfarms@gmail.com',
    hours: '9:00 AM – 7:00 PM (Mon-Sun)',
    website: 'www.trishyamfarms.com'
  };

  socialLinks = [
    {
      icon: 'bi-whatsapp',
      url: 'https://wa.me/917631177171',
      label: 'WhatsApp',
      color: '#25D366'
    },
    {
      icon: 'bi-facebook',
      url: '#',
      label: 'Facebook',
      color: '#1877F2'
    },
    {
      icon: 'bi-instagram',
      url: '#',
      label: 'Instagram',
      color: '#E4405F'
    },
    {
      icon: 'bi-twitter',
      url: '#',
      label: 'Twitter',
      color: '#1DA1F2'
    },
    {
      icon: 'bi-envelope',
      url: 'mailto:trishyamfarms@gmail.com',
      label: 'Email',
      color: '#EA4335'
    },
    {
      icon: 'bi-telephone',
      url: 'tel:7631177171',
      label: 'Call',
      color: '#28a745'
    }
  ];

  certifications = [
    'Chemical-Free Farming',
    'Hygienic Processing',
    'Fresh Daily Harvest',
    'Quality Assured',
    'Sustainable Practices'
  ];
}
