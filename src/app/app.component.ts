import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { PrimeNgModule } from './common/module/prime-module';
import { SideNavbarComponent } from "./components/side-navbar/side-navbar.component";
import { NgClass } from '@angular/common';

interface Task {
  title: string,
  url: string,
  iconName: string,
}
export interface Sidebar {
  title: string,
  url: string,
  iconClass: string
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NgClass,
    PrimeNgModule,
    RouterOutlet,
    SideNavbarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My Coding Tasks';
  private readonly primengConfig = inject(PrimeNGConfig);
  collapsed = signal(true);
  sidebarData = signal<Sidebar[]>([
    {
      title: 'Home',
      iconClass: 'pi pi-home',
      url: '',
    },
    {
      title: 'About',
      iconClass: 'pi pi-info-circle',
      url: 'about-us',

    },
    {
      title: 'Services',
      url: 'services',
      iconClass: 'pi pi-globe'
    },
    {
      title: 'Contact',
      url: 'contact',
      iconClass: 'pi pi-address-book'
    },
    {
      title: 'Feedback',
      url: 'rating',
      iconClass: 'pi pi-question-circle'
    },
    {
      title: 'Calculator',
      url: 'calculator',
      iconClass: 'pi pi-calculator'
    }
  ]);
  tasks: Task[] = [
    { title: 'Rating Task', url: 'rating', iconName: ''},
  ]
  ngOnInit() {
      this.primengConfig.ripple = true;
  }

}
