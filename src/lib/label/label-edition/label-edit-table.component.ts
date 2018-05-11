import {Component, EventEmitter, Input, Output} from "@angular/core";
import {LabelEdition} from "./labelEdition.service";

@Component({
  selector: 'label-edit-table',
  templateUrl: './label-edit-table.component.html',
})
export class LabelEditTable {

    @Input("key")
    key:string;

    @Input("languages")
    languages:string[];

    @Input("labels")
    labels:LabelEdition[];

    @Output() onBack = new EventEmitter();

    getLabel(lang: string) {
        let found = this.labels[this.key].find((l:any) => l.lang === lang)
        if (found) {
            return found;
        } else {
            return new LabelEdition(this.key, null, null, lang)
        }
    }

    goBack(){
        this.onBack.emit();
    }

}

