import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageGvRoutingModule } from './landing-page-gv-routing.module';
import { LandingPageMenuModule } from '../landing-page-menu/landing-page-menu.module';
import { FormGvModule } from '../form-gv/form-gv.module';
import { LandingFooterModule } from '../landing-footer/landing-footer.module';

import { LandingPageGvComponent } from './landing-page-gv.component';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactListModule } from '../contact-list/contact-list.module';

@NgModule({
  declarations: [
  	LandingPageGvComponent
	],
  imports: [
    CommonModule,
    LandingPageGvRoutingModule,
    LandingPageMenuModule,
    LandingFooterModule,
    FormGvModule,
    ContactListModule,
    ScrollToModule.forRoot()
  ]
})
export class LandingPageGvModule { }
