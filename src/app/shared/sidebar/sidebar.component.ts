import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  
  constructor() { }
  items!: MenuItem[];
  ngOnInit(){
    this.items = [
      {
        label: 'About',
        icon: 'pi pi-fw pi-user',
        routerLink:'about'
    },
      {
          label: 'Certifications',
          icon: 'pi pi-star',
          routerLink:'certifications'
      },
      {
          label: 'Portfolio',
          icon: 'pi pi-fw pi-briefcase',
          routerLink:'portfolio'
      },
      {
        label: 'Contact',
        icon: 'pi pi-envelope',
        routerLink:'contact'
    }
  ];
  }

}
