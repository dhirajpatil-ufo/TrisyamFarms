import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  currentYear = new Date().getFullYear();
  currentSlide = 0;
  autoSlideInterval: any;
  slideWidth = 0;

  @ViewChild('carouselTrack') carouselTrack!: ElementRef;

  // Gallery images
  galleryImages = [
    {
      image: 'assets/images/gallery/farm-overview.png',
      title: 'Farm Overview',
      category: 'farm',
      description: 'Our state-of-the-art mushroom farming facility in Sangli'
    },
    {
      image: 'assets/images/gallery/cultivation-chamber.png',
      title: 'Growing Chambers',
      category: 'cultivation',
      description: 'Temperature-controlled environments for optimal yield'
    },
    {
      image: 'assets/images/gallery/fresh-harvest.png',
      title: 'Fresh Harvest',
      category: 'harvest',
      description: 'Daily hand-picking of premium Oyster Mushrooms'
    },
    {
      image: 'assets/images/gallery/quality-check.png',
      title: 'Quality Inspection',
      category: 'quality',
      description: 'Rigorous quality checks ensuring premium standards'
    },
    {
      image: 'assets/images/gallery/sustainable-farming.png',
      title: 'Sustainable Practices',
      category: 'sustainability',
      description: 'Eco-friendly and sustainable farming methods'
    }
  ];

  benefits = [
    { icon: 'bi-truck', title: 'Fresh Farm-to-Market', desc: 'Direct supply from our farm' },
    { icon: 'bi-shield-check', title: 'Hygienic Conditions', desc: 'Grown in controlled environments' },
    { icon: 'bi-award', title: 'Consistent Quality', desc: 'Premium quality mushrooms' },
    { icon: 'bi-cash-coin', title: 'Affordable Pricing', desc: 'Competitive prices' },
    { icon: 'bi-clock-history', title: 'Reliable Delivery', desc: 'Timely delivery support' },
    { icon: 'bi-people', title: 'Expert Team', desc: 'Experienced farmers' }
  ];

  constructor() {
    this.startAutoSlide();
  }

  ngAfterViewInit() {
    // Calculate slide width after view initializes
    setTimeout(() => {
      this.updateSlideDimensions();
    });
  }

  updateSlideDimensions() {
    if (this.carouselTrack?.nativeElement) {
      const track = this.carouselTrack.nativeElement;
      const slide = track.querySelector('.carousel-slide');
      if (slide) {
        this.slideWidth = slide.clientWidth;
        this.updateCarousel();
      }
    }
  }

  // Carousel Navigation - FIXED
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.galleryImages.length;
    this.updateCarousel();
    this.resetAutoSlide();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0
      ? this.galleryImages.length - 1
      : this.currentSlide - 1;
    this.updateCarousel();
    this.resetAutoSlide();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateCarousel();
    this.resetAutoSlide();
  }

  updateCarousel() {
    if (this.carouselTrack && this.slideWidth > 0) {
      const translateX = -(this.currentSlide * 100);
      this.carouselTrack.nativeElement.style.transform = `translateX(${translateX}%)`;
    }
  }

  // Auto slide
  startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  resetAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.startAutoSlide();
    }
  }

  onImageError(event: any) {
    const fallbackImages = [
      'https://images.unsplash.com/photo-1626645738673-4c2ee9864c0f?q=80&w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=600&h=400&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=600&h=400&fit=crop'
    ];
    const randomIndex = Math.floor(Math.random() * fallbackImages.length);
    event.target.src = fallbackImages[randomIndex];
    event.target.alt = 'Trisyam Farms Mushroom';
  }

  ngOnDestroy() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }
}
