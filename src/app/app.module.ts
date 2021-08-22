import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TemplatesModule } from 'src/app/components/templates/templates.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TemplatesModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
