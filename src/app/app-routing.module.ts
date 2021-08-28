import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';
import { Feature1Component } from '@pages/feature1/feature1.component';
import { Feature2Component } from '@pages/feature2/feature2.component';
import { Subfeature31Component } from '@pages/feature3/subfeature21/subfeature31.component';
import { Subfeature32Component } from '@pages/feature3/subfeature22/subfeature32.component';
import { PageNotFoundComponent } from '@pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'feature-1', component: Feature1Component
  }, {
    path: 'feature-2', component: Feature2Component,
  }, {
    path: 'feature-3', children: [
      {
        path: 'sub-feature-3-1',
        component: Subfeature31Component
      }, {
        path: 'sub-feature-3-2',
        component: Subfeature32Component
      }, {
        path: '',
        redirectTo: 'sub-feature-3-1',
        pathMatch: 'full' // don't forget it
      }
    ]
  }, {
    path: '', pathMatch: 'full', redirectTo: 'feature-1'
  }, {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: !environment.production
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
