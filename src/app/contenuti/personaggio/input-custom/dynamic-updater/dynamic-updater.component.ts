import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SheetDataSet } from 'src/app/model/sheetDataSet.model';
import { ModaleComponent } from 'src/app/utility/modale/modale.component';

@Component({
  selector: 'dynamic-updater',
  templateUrl: './dynamic-updater.component.html',
  styleUrls: ['./dynamic-updater.component.css']
})
export class DynamicUpdaterComponent implements OnInit {

  @ViewChild('dynamicModal') dynamicModal!: ModaleComponent;

  dynamicFormGroup!: FormGroup;
  @Input() dataSet!: SheetDataSet[];
  @Input() entity!: {}

  @Output() dynamicEventEmitter: EventEmitter<any> = new EventEmitter<any>()

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormGroup();
  }

  createFormGroup() {
    this.dynamicFormGroup = this._fb.group({})
    this.dataSet.forEach(data => {
      this.dynamicFormGroup.setControl(data.key, this._fb.control(this.entity[data.key], data.mandatory?Validators.required:null))
    })
  }

  dynamicUpdate(){
    this.dynamicEventEmitter.emit(this.dynamicFormGroup.value)
    this.dynamicModal.hidden=true;
  }

}
