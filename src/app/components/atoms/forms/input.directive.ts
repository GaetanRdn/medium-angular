import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: 'input[medInput][type=text]', // (1) select only input text with our directive attribute
  host: {
    class: 'md-input', // (2) Set the specific class
    '[attr.disabled]': 'disabled || null', // part of (6) tips to better handle the attribute value
  }
})
export class InputDirective {
  /**
   * (3) Allows to specify the value with an input
   * We use getter and setter to directly work with the native element value
   */
  @Input()
  set value(value: string) {
    this._elementRef.nativeElement.value = value;
  }

  get value(): string | undefined {
    return this._elementRef.nativeElement.value;
  }

  /**
   * part of (6) Set med-disabled class if disabled = true
   * Allows to also set the disabled attribute
   * Allows to take the value from an input
   */
  @HostBinding('class.med-disabled')
  @Input()
  public disabled = false;

  /**
   * (4) create an EventEmitter to notify the parent
   */
  @Output()
  public readonly valueChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * part of (5) set a specific class when focused is true
   */
  @HostBinding('class.med-focused')
  public focused = false; // part of (5)

  /**
   * @param _elementRef required to work with the native value
   */
  constructor(private _elementRef: ElementRef) {}

  /**
   * part of (5) Here we specified a boolean parameter when focus and blur are
   * triggered. Respectively it's true of false and allow to directly set the
   * right value.
   */
  @HostListener('focus', ['true'])
  @HostListener('blur', ['false'])
  public toggleFocus(focused: boolean): void {
    this.focused = focused;
  }

  /**
   * part of (4) here we listen to the input event and emit the new value
   */
  @HostListener('input', ['$event.target.value'])
  public onInput(val: string): void {
    this.value = val;
    this.valueChange.emit(val);
  }
}
