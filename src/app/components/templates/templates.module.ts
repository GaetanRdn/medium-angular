import { NgModule } from '@angular/core';
import { FormsModule } from 'src/app/components/atoms/forms/forms.module';
import { InputTemplateComponent } from 'src/app/components/templates/atoms/forms/input-template/input-template.component';

@NgModule({
  declarations: [InputTemplateComponent],
  exports: [InputTemplateComponent],
  imports: [
    FormsModule
  ]
})
export class TemplatesModule { }
