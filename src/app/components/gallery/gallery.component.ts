import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  activeCategory = 'all';

  categories = [
    { id: 'all', name: 'All Photos', icon: 'bi-images' },
    { id: 'farm', name: 'Farm', icon: 'bi-house' },
    { id: 'cultivation', name: 'Cultivation', icon: 'bi-tree' },
    { id: 'harvest', name: 'Harvest', icon: 'bi-basket' },
    { id: 'packaging', name: 'Packaging', icon: 'bi-box-seam' }
  ];

  // Use placeholder images first, then replace with your actual images
  galleryItems = [
    {
      id: 1,
      category: 'farm',
      image: 'assets/images/gallery/farm-overview.png',
      title: 'Farm Overview',
      description: 'Our modern mushroom farming facility in Sangli'
    },
    {
      id: 2,
      category: 'cultivation',
      image: 'assets/images/gallery/cultivation-chamber.png',
      title: 'Growing Chambers',
      description: 'Temperature-controlled environment for optimal growth'
    },
    {
      id: 3,
      category: 'harvest',
      image: 'assets/images/gallery/fresh-harvest.png',
      title: 'Fresh Harvest',
      description: 'Daily harvest of premium Oyster Mushrooms'
    },
    {
      id: 4,
      category: 'packaging',
      image: 'assets/images/gallery/quality-check.png',
      title: 'Quality Inspection',
      description: 'Thorough quality check of each mushroom'
    },
    {
      id: 5,
      category: 'farm',
      image: 'assets/images/gallery/sustainable-farming.png',
      title: 'Sustainable Farming',
      description: 'Eco-friendly farming practices at our farm'
    },
    {
      id: 6,
      category: 'cultivation',
      image: 'assets/images/gallery/farm-overview.png',
      title: 'Farm Infrastructure',
      description: 'Modern infrastructure for mushroom cultivation'
    },
    {
      id: 7,
      category: 'harvest',
      image: 'assets/images/gallery/cultivation-chamber.png',
      title: 'Expert Harvesting',
      description: 'Skilled harvesting by our experienced team'
    },
    {
      id: 8,
      category: 'packaging',
      image: 'assets/images/gallery/fresh-harvest.png',
      title: 'Hygienic Processing',
      description: 'Clean and hygienic processing area'
    },
    {
      id: 9,
      category: 'farm',
      image: 'assets/images/gallery/quality-check.png',
      title: 'Farm Operations',
      description: 'Day-to-day operations at Trishyam Farms'
    },
    {
      id: 10,
      category: 'cultivation',
      image: 'assets/images/gallery/sustainable-farming.png',
      title: 'Growth Monitoring',
      description: 'Regular monitoring of mushroom development'
    }
  ];

  // Fallback placeholder images
  placeholderImages = [
    'https://images.unsplash.com/photo-1626645738673-4c2ee9864c0f?q=80&w=2070',
    'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2070',
    'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070'
  ];

  get filteredGallery() {
    if (this.activeCategory === 'all') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(item => item.category === this.activeCategory);
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  getCategoryCount(categoryId: string): number {
    if (categoryId === 'all') {
      return this.galleryItems.length;
    }
    return this.galleryItems.filter(item => item.category === categoryId).length;
  }

  onImageError(event: any) {
    console.log('Image failed to load, using placeholder');
    const randomIndex = Math.floor(Math.random() * this.placeholderImages.length);
    event.target.src = this.placeholderImages[randomIndex];
    event.target.alt = 'Trishyam Farms Mushroom';
  }
}
