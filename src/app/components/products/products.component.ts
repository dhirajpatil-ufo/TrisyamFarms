import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  benefits = [
    { icon: 'bi-heart-pulse', title: 'Rich in Protein & Fiber', description: 'Excellent for muscle growth and digestion' },
    { icon: 'bi-apple', title: 'Low in Fat & Calories', description: 'Perfect for weight management' },
    { icon: 'bi-shield-check', title: 'Boosts Immunity', description: 'Contains antioxidants and vitamins' },
    { icon: 'bi-activity', title: 'Good for Digestion', description: 'Promotes gut health' },
    { icon: 'bi-flower1', title: 'Vegetarian Diet Friendly', description: 'Great protein source for vegetarians' },
    { icon: 'bi-lightning-charge', title: 'Energy Boosting', description: 'Provides sustained energy' }
  ];

  customers = [
    { icon: 'bi-house', title: 'Retail Customers', description: 'Household packs (250g, 500g, 1kg)' },
    { icon: 'bi-building', title: 'Hotels & Restaurants', description: 'Commercial grade, bulk supplies' },
    { icon: 'bi-shop', title: 'Wholesalers', description: 'Large quantity distribution' },
    { icon: 'bi-box-seam', title: 'Bulk Orders', description: 'Custom requirements, events, institutions' }
  ];

  varieties = [
    { name: 'White Oyster', color: 'bg-light', description: 'Mild flavor, versatile cooking' },
    { name: 'Pink Oyster', color: 'bg-pink', description: 'Distinct color, seafood-like taste' },
    { name: 'Yellow Oyster', color: 'bg-warning', description: 'Rich texture, nutty flavor' },
    { name: 'Grey Oyster', color: 'bg-secondary', description: 'Classic variety, meaty texture' }
  ];
}
