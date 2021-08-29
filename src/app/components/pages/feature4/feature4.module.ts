import { NgModule } from '@angular/core';
import { Feature4ConsultComponent } from '@pages/feature4/feature4-consult/feature4-consult.component';
import { Feature4EditComponent } from '@pages/feature4/feature4-edit/feature4-edit.component';
import { Feature4RoutingModule } from '@pages/feature4/feature4-routing.module';
import { Feature4Component } from './feature4.component';

@NgModule({
  declarations: [Feature4Component, Feature4EditComponent, Feature4ConsultComponent],
  imports: [Feature4RoutingModule]
})
export class Feature4Module {
}
