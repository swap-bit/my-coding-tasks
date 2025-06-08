import { Component, input } from '@angular/core';
import { Sidebar } from '../../app.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './side-navbar.component.html',
  styleUrl: './side-navbar.component.scss'
})
export class SideNavbarComponent {

  collapsed = input.required<boolean>();
  sidebarData = input<Sidebar[]>([])
}
