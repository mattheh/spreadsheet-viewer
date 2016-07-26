import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
import { AuthService} from './drive.service';
import { PickerService } from './drive.service';
@Component({
  selector: 'my-sheets',
  template: `
    <button (click)="createPicker()">SELECT</button>
    <div *ngIf="url">
      <iframe width="100%" height="100%" [src]="url"></iframe>
    </div>  
`,
  directives: [],
  providers: [
    AuthService,
    PickerService
  ]
})
export class SheetsComponent implements OnInit { 

  private url: SafeResourceUrl;

  constructor(private authService: AuthService, private pickerService: PickerService, private sanitizer: DomSanitizationService) {}

  createPicker() {
    this.pickerService.createPicker().then(url => 
                                           this.url = this.sanitizer.bypassSecurityTrustResourceUrl(url));
  }

  ngOnInit() {
    //this.createPicker();
  }

}

