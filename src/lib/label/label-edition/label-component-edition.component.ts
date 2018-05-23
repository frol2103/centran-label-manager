import {Component, Input, OnInit} from "@angular/core";
import {LabelEdition, LabelEditionService} from "./labelEdition.service";
import {Observable} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LabelEditModal} from "./label-edit-modal.component";
import {BsModalService} from "ngx-bootstrap";


@Component({
  selector: 'l',
  templateUrl: './label-component-edition.component.html',
  styleUrls: ['label-component-edition.component.css']
})
export class LabelComponentEdition implements OnInit {
    @Input() key: string;
    @Input() needed : boolean;
    label: Observable<LabelEdition>;
    labelValue: Observable<string>;
    labelHelp: Observable<string>;
    @Input() noInfo : boolean = false;

    constructor(private labelService: LabelEditionService, private modalService: BsModalService) {
    }

    onEdit() {
        const modalRef = this.modalService.show(LabelEditModal,{ class: 'gray modal-lg modal-xl' });
        modalRef.content.setKey(this.key)
    }
    ngOnInit() {
        this.label = this.labelService.getLabel(this.key)
        this.labelValue = this.label.map(l => ((l) ? l.value : null))
        if( this.noInfo == false)
            this.labelHelp = this.label.map(l => (l) ? l.help : null)
    }
}
