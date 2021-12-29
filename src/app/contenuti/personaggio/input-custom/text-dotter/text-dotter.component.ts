import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'text-dotter',
  templateUrl: './text-dotter.component.html',
  styleUrls: ['./text-dotter.component.css']
})
export class TextDotterComponent implements OnInit {

  @ViewChild('dot1') dot1: any;
  @ViewChild('dot2') dot2: any;
  @ViewChild('dot3') dot3: any;
  @ViewChild('dot4') dot4: any;
  @ViewChild('dot5') dot5: any;
  @ViewChild('dot6') dot6: any;
  @ViewChild('dot7') dot7: any;
  @ViewChild('dot8') dot8: any;
  @ViewChild('dot9') dot9: any;
  @ViewChild('dot10') dot10: any;
  @ViewChild('content') content: any;
  @ViewChild('label') label: any;
  @ViewChild('dotter') dotter: any;

  @Input() type: string = '';
  @Input() isTenDot: boolean = false;
  @Input() value: any;
  @Input() isReadOnly: boolean = false

  dotValue: any = null;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (!isNaN(this.value)) {
      this['dot' + this.value].nativeElement.checked = true;
      this.assignDotValue(this.value)
    }

    if (this.content.nativeElement.childNodes.length == 0) {
      this.label.nativeElement.hidden = true
      // console.log("DOTTER", this.dotter)
      this.dotter.elementRef.nativeElement.previousElementSibling.childNodes[2].className += " py-0"
    };
  }

  dotClick(event: any) {
    // const dotNAME = event.path[0].name;
    var dotVALUE = parseInt(event.target.value);
    var isChecked: boolean = event.target.checked;

    isChecked ? this.dotValue = dotVALUE : this.dotValue = dotVALUE - 1;

    //per i dot di dotVALUE minore, checkarli
    //per i dot di dotVALUE maggiore, un-checkarli
    this.assignDotValue(dotVALUE);

    this.dotValue == 0 ? this.dotValue = null : null;
  }

  assignDotValue(dotValue: number) {
    switch (dotValue) {
      case 1:
        this.dot2.nativeElement.checked = false;
        this.dot3.nativeElement.checked = false;
        this.dot4.nativeElement.checked = false;
        this.dot5.nativeElement.checked = false;
        this.dot6? this.dot6.nativeElement.checked = false : null;
        this.dot7? this.dot7.nativeElement.checked = false : null;
        this.dot8? this.dot8.nativeElement.checked = false : null;
        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 2:
        this.dot1.nativeElement.checked = true;

        this.dot3.nativeElement.checked = false;
        this.dot4.nativeElement.checked = false;
        this.dot5.nativeElement.checked = false;
        this.dot6? this.dot6.nativeElement.checked = false : null;
        this.dot7? this.dot7.nativeElement.checked = false : null;
        this.dot8? this.dot8.nativeElement.checked = false : null;
        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 3:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;

        this.dot4.nativeElement.checked = false;
        this.dot5.nativeElement.checked = false;
        this.dot6? this.dot6.nativeElement.checked = false : null;
        this.dot7? this.dot7.nativeElement.checked = false : null;
        this.dot8? this.dot8.nativeElement.checked = false : null;
        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 4:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;
        this.dot3.nativeElement.checked = true;

        this.dot5.nativeElement.checked = false;
        this.dot6? this.dot6.nativeElement.checked = false : null;
        this.dot7? this.dot7.nativeElement.checked = false : null;
        this.dot8? this.dot8.nativeElement.checked = false : null;
        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 5:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;
        this.dot3.nativeElement.checked = true;
        this.dot4.nativeElement.checked = true;

        this.dot6? this.dot6.nativeElement.checked = false : null;
        this.dot7? this.dot7.nativeElement.checked = false : null;
        this.dot8? this.dot8.nativeElement.checked = false : null;
        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 6:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;
        this.dot3.nativeElement.checked = true;
        this.dot4.nativeElement.checked = true;
        this.dot5.nativeElement.checked = true;

        this.dot7? this.dot7.nativeElement.checked = false : null;
        this.dot8? this.dot8.nativeElement.checked = false : null;
        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 7:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;
        this.dot3.nativeElement.checked = true;
        this.dot4.nativeElement.checked = true;
        this.dot5.nativeElement.checked = true;
        this.dot6? this.dot6.nativeElement.checked = true : null;

        this.dot8? this.dot8.nativeElement.checked = false : null;
        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 8:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;
        this.dot3.nativeElement.checked = true;
        this.dot4.nativeElement.checked = true;
        this.dot5.nativeElement.checked = true;
        this.dot6? this.dot6.nativeElement.checked = true : null;
        this.dot7? this.dot7.nativeElement.checked = true : null;

        this.dot9? this.dot9.nativeElement.checked = false : null;
        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 9:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;
        this.dot3.nativeElement.checked = true;
        this.dot4.nativeElement.checked = true;
        this.dot5.nativeElement.checked = true;
        this.dot6? this.dot6.nativeElement.checked = true : null;
        this.dot7? this.dot7.nativeElement.checked = true : null;
        this.dot8? this.dot8.nativeElement.checked = true : null;

        this.dot10? this.dot10.nativeElement.checked = false : null;
        break;
      case 10:
        this.dot1.nativeElement.checked = true;
        this.dot2.nativeElement.checked = true;
        this.dot3.nativeElement.checked = true;
        this.dot4.nativeElement.checked = true;
        this.dot5.nativeElement.checked = true;
        this.dot6? this.dot6.nativeElement.checked = true : null;
        this.dot7? this.dot7.nativeElement.checked = true : null;
        this.dot8? this.dot8.nativeElement.checked = true : null;
        this.dot9? this.dot9.nativeElement.checked = true : null;
        break;
    }
  }
}
