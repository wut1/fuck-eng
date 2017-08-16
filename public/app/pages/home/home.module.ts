import { HomeComponent } from './home.component';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PnfModule } from '../../theme/pnf.module';
import {routing} from './home.routing'

@NgModule({
  imports: [
    CommonModule,
    PnfModule,
    routing
  ],
  declarations: [
   HomeComponent
  ]
})
export class HomeModule {}
