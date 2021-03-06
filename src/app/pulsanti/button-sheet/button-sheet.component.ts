import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-sheet',
  template: '<button *ngIf="isDesktop; else phonebutton" mat-stroked-button [color]="color" [routerLink]="path" routerLinkActive="active" style="width:12vw"><i class="bi bi-person-circle"></i> scheda</button>'+
  ' <ng-template #phonebutton> <button mat-icon-button [color]="color" [routerLink]="path" routerLinkActive="active"><i class="bi bi-person-circle"></i></button> </ng-template>'
})
export class ButtonSheetComponent implements OnInit {

  isPhone: boolean = false;
  isIpad: boolean = false;
  isDesktop: boolean = false;

  path: string = "/sheet"
  color: string = ""
  isPathMatching: boolean = false;

  constructor() {
    this.setDeviceType();

    if (window.location.pathname.includes(this.path)) {
      this.isPathMatching = true
      this.color = "primary"
    } else {
      this.isPathMatching = false;
      this.color = ""
    }
   }

  ngOnInit(): void {
  }

  setDeviceType(){
    const height = window.screen.availHeight;
    const width = window.screen.availWidth;

    if (width<=414){
      this.isPhone=true;
      this.isIpad=false;
      this.isDesktop=false;
    } else if (width>=768 && width<=1024){
      this.isPhone=false;
      this.isIpad=true;
      this.isDesktop=false;
    } else {
      this.isPhone=false;
      this.isIpad=false;
      this.isDesktop=true;
    }
  }
}
