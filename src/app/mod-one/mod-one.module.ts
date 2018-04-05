import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModOneRoutingModule } from './mod-one-routing.module';
import { CompOneComponent } from './comp-one/comp-one.component';
import { ModOneComponent } from './mod-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

@NgModule({
  imports      : [
    CommonModule,
    ModOneRoutingModule
  ],
  declarations : [ ModOneComponent, CompOneComponent, CompTwoComponent ],
  // bootstrap: [ModOneComponent]
  // exports: [CompOneComponent]
})
export class ModOneModule {
}
