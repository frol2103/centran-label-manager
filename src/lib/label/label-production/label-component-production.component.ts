import {Component, Input, OnInit} from "@angular/core";
import {Label, LabelProductionService} from "./labelProduction.service";
import {Observable} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LabelInfoModalComponent} from "../label-info-modal/label-info-modal.component";

@Component({
  selector: 'l',
  templateUrl: './label-component-production.component.html',
  styleUrls: ['./label-component-production.component.css']
})
export class LabelComponentProduction implements OnInit {
  @Input() key: string;
  @Input() needed : boolean;
  label: Observable<Label>;
  labelValue: Observable<string>;
  labelHelp: Observable<string>;
  toggleInfo: boolean = false;
  @Input() noInfo : boolean = false;

  constructor(private labelService: LabelProductionService,  private modalService: NgbModal) {
  }


  ngOnInit() {
    this.label = this.labelService.getLabel(this.key)
    this.labelValue = this.label.map(l => ((l) ? l.value  : null))
    if( this.noInfo == false)
      this.labelHelp = this.label.map(l => (l) ? l.help : null)
  }

  toggle() {
    if( this.noInfo === false){
      const modalRef = this.modalService.open(LabelInfoModalComponent,{size:"lg",windowClass:"xxl"});
      modalRef.componentInstance.setLabelHelp(this.labelHelp)
    }
  }
}
