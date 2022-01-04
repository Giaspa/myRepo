import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'quality-form',
  templateUrl: './quality-form.component.html',
  styleUrls: ['./quality-form.component.css']
})
export class QualityFormComponent implements OnInit {

  @Input() headerSingolare: string = "Doni";
  @Input() headerPlurale: string = "dono";
  @Input() formGroup!: FormGroup;
  @Input() mandatoryField: string = "dono";
  @Input() optionalField: string = "link";
  @Input() dataSet: any[] = [];
  @Input() isLink: boolean = false;

  @Output() addEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() updateEventEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  firstLetterUpper(stringa: string) {
    const first: string = stringa[0].toUpperCase()
    const resto: string = stringa.slice(1, stringa.length).toLowerCase()
    return first + resto;
  }

  addData() {
    this.addEventEmitter.emit(this.formGroup.value)
  }

  updateData(id:any){
    this.updateEventEmitter.emit(this.formGroup.value)
  }

  deleteData(id:any){
    this.deleteEventEmitter.emit(id)
  }

  patchFormValue(data: {}) {
    for (const [key, value] of Object.entries(data)){
      //@ts-ignore
      this.formGroup.get(key.toString()).patchValue(value)
    }
  }
}
