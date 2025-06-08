import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'about-us',
        loadComponent: () => import('./components/about-us/about-us.component').then(au => au.AboutUsComponent),
        title: 'About Us'
    },
    {
        path: 'services',
        loadComponent: () => import('./components/services/services.component').then(s => s.ServicesComponent),
        title: 'Services'
    },
    {
        path: 'contact',
        loadComponent: () => import('./components/contacts/contacts.component').then(c => c.ContactsComponent),
        title: 'Contacts'
    },
    {
        path: 'rating',
        loadComponent: () => import('./components/rating/rating.component').then(r => r.RatingComponent),
        title: 'Rating'
    },
    {
        path: 'calculator',
        loadComponent: () => import('./components/calculator/calculator.component').then(c => c.CalculatorComponent),
        title: 'Calculator'
    }
];
