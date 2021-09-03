import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Feature4ConsultComponent } from '@pages/feature4/feature4-consult/feature4-consult.component';
import { Feature4EditComponent } from '@pages/feature4/feature4-edit/feature4-edit.component';
import { Feature4Component } from '@pages/feature4/feature4.component';
import { Feature4Resolver } from '@pages/feature4/feature4.resolver';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: ':code',
    component: Feature4Component,
    resolve: {
      myData: Feature4Resolver
    },
    children: [
      {
        path: 'consult',
        component: Feature4ConsultComponent
      }, {
        path: 'edit',
        component: Feature4EditComponent
      }, {
        path: '', redirectTo: 'consult' // default child route if omitted
      }, {
        path: '**', component: PageNotFoundComponent // not inherited
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature4RoutingModule {
}
