import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {BsModalService} from 'ngx-bootstrap/modal';
import {Label, LabelService} from './label.service';
import {LabelEditModal} from './label-edit-modal.component';
import {filter, map} from 'rxjs/operators';


@Component({
  selector: 'l',
  templateUrl: './label-component.component.html',
  styleUrls: ['label-component.component.css']
})
export class LabelComponent implements OnInit {
  static SEPARATOR = "-";

  @Input() prefix: string;
  @Input() key: string;
  @Input() needed: boolean;
  @Input() parameters: any;
  label: Observable<Label>;
  labelValue: Observable<string>;
  labelHelp: Observable<string>;
  @Input() noInfo = false;
  @Input() positioning = 'right';
  @Input() customClass = '';

  constructor(private labelService: LabelService, private modalService: BsModalService) {
  }

  get fullKey() : string {
    if(this.prefix){
      return this.prefix + LabelComponent.SEPARATOR + this.key;
    } else {
      return this.key;
    }

  }

  onEdit() {
    if (this.labelService.canEdit) {
      const modalRef = this.modalService.show(LabelEditModal, {class: 'gray modal-lg modal-xl'});
      modalRef.content.setKey(this.fullKey);
    }
  }

  ngOnInit() {
    this.label = this.labelService.getLabel(this.fullKey);
    this.labelValue = this.label.pipe(map(l => ((l) ? l.value : null)), filter(l => l !== null), map(labelTranslated => {
      let message = labelTranslated;
      if (this.parameters != null && this.parameters instanceof Array && this.parameters.length > 0) {
        for (let _i = 0; _i < this.parameters.length; _i++) {
          message = message.replace('{' + _i + '}', this.parameters[_i]);
        }
      }
      if (this.parameters !== null && this.parameters instanceof Map && this.parameters.size > 0) {
        this.parameters.forEach((value, key) => {
          message = message.replace('{' + key + '}', value);
        });
      }
      if (this.parameters !== null && this.parameters instanceof Object && Object.keys(this.parameters).length > 0) {
        Object.keys(this.parameters).forEach((key) => {
          message = message.replace('{' + key + '}', this.parameters[key]);
        });
      }
      return message;
    }));
    if (this.noInfo == false) {
      this.labelHelp = this.label.pipe(map(l => (l) ? l.help : null));
    }

  }

  getShowKeys() {
    return this.labelService.showKeys;
  }
}
