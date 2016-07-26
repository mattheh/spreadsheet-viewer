import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SheetsComponent } from './sheets.component'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <my-sheets></my-sheets>
  `,
  directives: [SheetsComponent],
  providers: []
})

export class AppComponent {
  title = 'Spreadsheet Viewer';
}
    //<a [routerLink]="['/sheets']">Sheets</a>
    //<router-outlet></router-outlet>
