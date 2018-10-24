import {Component, Input, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {BsModalService} from "ngx-bootstrap";
import {Label, LabelService} from "./label.service";
import {LabelEditModal} from "./label-edit-modal.component";


@Component({
  selector: 'l',
  templateUrl: './label-component.component.html',
  styleUrls: ['label-component.component.css']
})
export class LabelComponent implements OnInit {
    @Input() key: string;
    @Input() needed : boolean;
    label: Observable<Label>;
    labelValue: Observable<string>;
    labelHelp: Observable<string>;
    @Input() noInfo : boolean = false;

    constructor(private labelService: LabelService, private modalService: BsModalService) {
    }

    onEdit() {
        if(!this.labelService.prod) {
            const modalRef = this.modalService.show(LabelEditModal, {class: 'gray modal-lg modal-xl'});
            modalRef.content.setKey(this.key)
        }

    }
    ngOnInit() {
        this.label = this.labelService.getLabel(this.key)
        this.labelValue = this.label.map(l => ((l) ? l.value : null))
        if( this.noInfo == false)
            this.labelHelp = this.label.map(l => (l) ? l.help : null)
    }
}
