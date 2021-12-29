import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  @Output() updateEmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() deleteEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  fieldUpdate(id: number){
    window.alert("fieldUpdate di CRUD.COMPONENT.TS da sistemare per il form!")

    this.updateEmit.emit(id);
  }

  fieldDelete(id: number){
    window.alert("fieldDelete di CRUD.COMPONENT.TS da sistemare per il form!")

    this.deleteEmit.emit(id);
  }

}
