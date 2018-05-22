import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  selector: 'label-info-modal-component',
  templateUrl: 'label-info-modal.component.html'
})

export class LabelInfoModalComponent implements OnInit {

  public labelHelp : string;

  constructor(public activeModal: BsModalRef) {
  }

  ngOnInit() {
  }

  setLabelHelp(value : string){
    this.labelHelp = value;
  }
}
