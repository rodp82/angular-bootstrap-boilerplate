import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModOneComponent } from './mod-one.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';

const routes: Routes = [
  { path : 'mod-one', component : ModOneComponent, children : [
    { path : 'comp-one', component : CompOneComponent },
    { path : 'comp-two', component : CompTwoComponent }
  ]}
];

@NgModule({
  imports : [ RouterModule.forChild(routes) ],
  exports : [ RouterModule ]
})
export class ModOneRoutingModule {
}
