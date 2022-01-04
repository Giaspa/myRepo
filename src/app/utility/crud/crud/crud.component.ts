import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input() dataset: [] = [];
  @Input() name: string = "nome";
  @Input() description: string = "note";
  @Input() fieldId: string = "id";
  @Input() nameLabel: string = "Nome";
  @Input() descriptionLabel: string = "Note";
  @Input() editLabel: string = "Modifica nome";
  @Input() deleteLabel: string = "Elimina nome";
  @Input() formGroup!: FormGroup;

  @Output() updateEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  fieldUpdate(id: number){
    this.updateEmit.emit(this.formGroup.value);
  }

  fieldDelete(id: number){
    this.deleteEmit.emit(id);
  }

  patchFormValue(data: {}) {
    for (const [key, value] of Object.entries(data)){
      //@ts-ignore
      this.formGroup.get(key.toString()).patchValue(value)
    }
  }
}
