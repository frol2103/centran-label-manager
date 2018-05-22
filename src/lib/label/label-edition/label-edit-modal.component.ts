import {Component} from "@angular/core";
import {LabelEdition, LabelEditionService} from "./labelEdition.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BsModalRef} from "ngx-bootstrap";

@Component({
  templateUrl: './label-edit-modal.component.html',
  styleUrls: [ './label-edit-modal.component.css']
})
export class LabelEditModal {
    key: string
    languages: string[];
    labels: LabelEdition[]

    constructor(private labelService: LabelEditionService, public activeModal: BsModalRef) {
        this.languages = labelService.languages
    }

    public setKey(key: string) {
        this.key = key
        this.labelService.getMultilingualLabel(key).subscribe(f => this.labels = f)
    }

    private getLabel(lang: string) {
        let found = this.labels.find(l => l.lang === lang)
        if (found) {
            return found;
        } else {
            return new LabelEdition(this.key, null, null, lang)
        }
    }

}
