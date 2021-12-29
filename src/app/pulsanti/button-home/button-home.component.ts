import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'button-home',
  template: '<button *ngIf="isDesktop; else phonebutton" mat-stroked-button routerLink="" routerLinkActive="active" style="width:12vw"><i class="bi bi-house"></i> home</button>'+
  ' <ng-template #phonebutton> <button mat-icon-button routerLink="" routerLinkActive="active"><i class="bi bi-house"></i></button> </ng-template>'
})
export class ButtonHomeComponent implements OnInit {

  isPhone: boolean = false;
  isIpad: boolean = false;
  isDesktop: boolean = false;

  constructor() {
    this.setDeviceType()
   }

  ngOnInit(): void {

    /**
     * CELLULARI: max-width 414px
     * IPAD:      min-device-width: 768px & max-device-width: 1024px
     */
    // console.table([["Altezza schermo", window.screen.availHeight], ["Larghezza schermo", window.screen.availWidth], ["url", window.location]])
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
