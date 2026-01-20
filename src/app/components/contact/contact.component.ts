import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactInfo = {
    address: 'Plot No. 2106, Tasgaon Kavthe Mahankal Road, Yogewadi, District Sangli, PIN - 416408',
    phone: '7631177171',
    phone2: '7379711171',
    whatsapp: '917631177171',
    email: 'trishyamfarms@gmail.com',
    hours: '9:00 AM – 7:00 PM',
    website: 'www.Trishyamfarms.com'
  };

  inquiry = {
    name: '',
    phone: '',
    email: '',
    requirement: '',
    quantity: '',
    customerType: ''
  };

  customerTypes = [
    { value: 'retail', label: 'Retail Customer' },
    { value: 'hotel', label: 'Hotel/Restaurant' },
    { value: 'wholesaler', label: 'Wholesaler' },
    { value: 'bulk', label: 'Bulk Order' },
    { value: 'other', label: 'Other' }
  ];

  quantities = [
    { value: '250g', label: '250g' },
    { value: '500g', label: '500g' },
    { value: '1kg', label: '1kg' },
    { value: '5kg', label: '5kg' },
    { value: '10kg+', label: '10kg+' },
    { value: 'custom', label: 'Custom Quantity' }
  ];

  socialLinks = [
    { icon: 'bi-whatsapp', url: 'https://wa.me/917631177171', label: 'WhatsApp', color: 'text-success' },
    { icon: 'bi-facebook', url: '#', label: 'Facebook', color: 'text-primary' },
    { icon: 'bi-instagram', url: '#', label: 'Instagram', color: 'text-danger' },
    { icon: 'bi-twitter', url: '#', label: 'Twitter', color: 'text-info' }
  ];

  faqs = [
    {
      question: 'What are your delivery areas?',
      answer: 'We deliver throughout Sangli district and nearby areas. For other locations, please contact us.'
    },
    {
      question: 'How do I place an order?',
      answer: 'You can call us directly at 7631177171 or use the inquiry form on this page.'
    },
    {
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we offer special rates for bulk orders. Contact us for custom pricing.'
    },
    {
      question: 'How fresh are your mushrooms?',
      answer: 'We harvest daily and deliver the same day or next day to ensure maximum freshness.'
    }
  ];

  submitted = false;

  onSubmit() {
    // In a real application, you would send this data to your backend
    console.log('Inquiry submitted:', this.inquiry);
    this.submitted = true;

    // Show success message
    setTimeout(() => {
      this.submitted = false;
      this.inquiry = {
        name: '',
        phone: '',
        email: '',
        requirement: '',
        quantity: '',
        customerType: ''
      };
    }, 3000);
  }
  // Add this method to your FooterComponent class
  copyCoordinates(coords: string): void {
    navigator.clipboard.writeText(coords).then(() => {
      const notification = document.createElement('div');
      notification.className = 'copy-notification';
      notification.textContent = `✓ Copied coordinates to clipboard!`;
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
      console.error('Failed to copy coordinates: ', err);
      const textArea = document.createElement('textarea');
      textArea.value = coords;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        alert(`Copied coordinates to clipboard!`);
      } catch (e) {
        alert('Failed to copy coordinates. Please copy manually: ' + coords);
      }
      document.body.removeChild(textArea);
    });
  }
}
