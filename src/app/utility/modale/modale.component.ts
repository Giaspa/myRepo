import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {

  @Input() hidden: boolean = true;
  @Input() header: string = "";


  constructor() { }

  ngOnInit(): void {
  }

  modalClose(event: any) {
    this.hidden = true;
  }

  modalOpen(event: any) {
    this.hidden = false;
  }
}
