import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  navItems = [
    { path: '/', label: 'Home', icon: 'bi-house' },
    { path: '/products', label: 'Our Product', icon: 'bi-shop' },
    { path: '/gallery', label: 'Gallery', icon: 'bi-images' },
    { path: '/about', label: 'About Us', icon: 'bi-info-circle' },
    { path: '/contact', label: 'Contact Us', icon: 'bi-telephone' }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
