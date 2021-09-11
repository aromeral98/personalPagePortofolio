import { NgModule } from '@angular/core';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {RippleModule} from 'primeng/ripple';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  exports:[
    AccordionModule,
    ButtonModule,
    MenubarModule,
    RippleModule,
    SidebarModule
  ]
})
export class NgPrimeModule { }
