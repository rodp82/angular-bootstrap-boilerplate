import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModTwoComponent } from './mod-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';

const routes: Routes = [
  { path : 'mod-two', component : ModTwoComponent, children : [
    { path : 'comp-three', component : CompThreeComponent },
    { path : 'comp-four', component : CompFourComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModTwoRoutingModule { }
