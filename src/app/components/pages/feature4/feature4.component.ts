import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'med-feature4',
  templateUrl: './feature4.component.html'
})
export class Feature4Component implements OnInit {
  public currentCode!: string | null;

  constructor(private _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.currentCode = this._activatedRoute.snapshot.paramMap.get('code');

    // OR

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => this.currentCode = param.get('code'));
  }
}
