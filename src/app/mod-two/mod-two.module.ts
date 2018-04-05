import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModTwoRoutingModule } from './mod-two-routing.module';
import { ModTwoComponent } from './mod-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';

@NgModule({
  imports: [
    CommonModule,
    ModTwoRoutingModule
  ],
  declarations: [ModTwoComponent, CompThreeComponent, CompFourComponent]
})
export class ModTwoModule { }
