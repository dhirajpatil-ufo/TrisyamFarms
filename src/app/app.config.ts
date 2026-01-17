import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
// Remove HashLocationStrategy import
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    // Change this to use PathLocationStrategy
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
};
