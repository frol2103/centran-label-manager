import {Component, EventEmitter, OnInit, Output, } from "@angular/core";
import {LabelEditionService} from "./labelEdition.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'label-add',
  template: '<form [formGroup]="addForm">' +
  '<div class="row">' +
  '<input type="text" formControlName="key" class="form-control col-md-10" [required]="true">' +
  '<div class="col-md-2"><button class="btn btn-fin03" [disabled]="addForm.invalid" (click)="add()"><span class="fa fa-plus "></span></button></div>' +
  '</div>' +
  '</form>' +
  '<div class="pad-top-5erm"></div>',
})
export class LabelAddTable implements OnInit{

  @Output()
  onAdd=new EventEmitter<string>();

  ngOnInit(): void {
    this.buildForm();
  }

  addForm: FormGroup;

  constructor(private fb: FormBuilder, private labelService: LabelEditionService) {

  }


  private buildForm() {
    this.addForm = this.fb.group({
      key: ''
    });
  }

  add(){
    this.onAdd.emit(this.addForm.get('key').value);
  }
}
