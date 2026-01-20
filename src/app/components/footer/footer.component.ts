import { Component, HostListener } from '@angular/core';
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
  isCallMenuOpen = false;

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
    address: 'Plot No. 2106, Tasgaon Kavthe Mahankal Road, Yogewadi, District Sangli, PIN - 416408',
    phone: '7631177171',
    phone2: '7379711171',
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

  // Toggle call menu
  toggleCallMenu(): void {
    this.isCallMenuOpen = !this.isCallMenuOpen;
  }

  // Close call menu
  closeCallMenu(): void {
    this.isCallMenuOpen = false;
  }

  // Copy number to clipboard
  copyNumber(number: string): void {
    navigator.clipboard.writeText(number).then(() => {
      // You can replace this with a proper toast notification if you have one
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.textContent = `✓ Copied ${number} to clipboard!`;
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2s forwards;
      `;
      document.body.appendChild(notification);

      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 2300);
    }).catch(err => {
      console.error('Failed to copy number: ', err);
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = number;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert(`Copied ${number} to clipboard!`);
      } catch (e) {
        alert('Failed to copy number. Please copy manually: ' + number);
      }
      document.body.removeChild(textArea);
    });

    this.closeCallMenu();
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const callFloat = document.querySelector('.call-float');
    if (callFloat && !callFloat.contains(event.target as Node)) {
      this.closeCallMenu();
    }
  }

  // Optional: Add keydown listener for ESC key
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    this.closeCallMenu();
  }
}
