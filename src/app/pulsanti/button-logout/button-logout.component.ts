import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Root } from 'src/app/service/root.model';

@Component({
  selector: 'button-logout',
  templateUrl: 'button-logout.component.html'
})
export class ButtonLogoutComponent implements OnInit {

  isPhone: boolean = false;
  isIpad: boolean = false;
  isDesktop: boolean = false;

  constructor(private router: Router) {
    this.setDeviceType()
  }

  ngOnInit(): void {

    /**
     * CELLULARI: max-width 414px
     * IPAD:      min-device-width: 768px & max-device-width: 1024px
     */
    // console.table([["Altezza schermo", window.screen.availHeight], ["Larghezza schermo", window.screen.availWidth], ["url", window.location]])
  }

  setDeviceType() {
    const height = window.screen.availHeight;
    const width = window.screen.availWidth;

    if (width <= 414) {
      this.isPhone = true;
      this.isIpad = false;
      this.isDesktop = false;
    } else if (width >= 768 && width <= 1024) {
      this.isPhone = false;
      this.isIpad = true;
      this.isDesktop = false;
    } else {
      this.isPhone = false;
      this.isIpad = false;
      this.isDesktop = true;
    }
  }

  userLogout(){
    // Root.removeSessionUser();
    sessionStorage.clear()
    this.router.navigate([""])
  }
}
