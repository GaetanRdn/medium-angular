import { Component } from '@angular/core';

@Component({
  selector: 'med-input-template',
  template: `
    <input medInput type="text" [(value)]="value" />
    <input medInput type="text" [value]="value" (valueChange)="value = $event"/>
    <button (click)="log()">Show in console</button>
    <br>
    <input medInput type="text" [disabled]="true" placeholder="I'm disabled" />
  `,
})
export class InputTemplateComponent {
  public value = 'Hey';

  public log(): void {
    console.log(this.value);
  }
}
