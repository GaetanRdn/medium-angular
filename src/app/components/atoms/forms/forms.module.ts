import { NgModule } from '@angular/core';
import { InputDirective } from 'src/app/components/atoms/forms/input.directive';

@NgModule({
  declarations: [InputDirective],
  exports: [
    InputDirective
  ]
})
export class FormsModule { }
