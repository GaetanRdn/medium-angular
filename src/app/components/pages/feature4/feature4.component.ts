import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'med-feature4',
  templateUrl: './feature4.component.html'
})
export class Feature4Component implements OnInit {
  public currentCode!: string | null;

  get data(): Observable<any> {
    return this._activatedRoute.data.pipe(map((data: Data) =>  data.myData));
  }

  constructor(private _activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.currentCode = this._activatedRoute.snapshot.paramMap.get('code');

    // OR

    this._activatedRoute.paramMap.subscribe((param: ParamMap) => this.currentCode = param.get('code'));
  }
}
