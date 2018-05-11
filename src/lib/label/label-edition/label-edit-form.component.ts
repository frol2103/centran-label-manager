import {Component, Input, OnInit} from "@angular/core";
import {LabelEdition, LabelEditionService} from "./labelEdition.service";
import {FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'label-edit-form',
  templateUrl: './label-edit-form.component.html',
})
export class LabelEditForm implements OnInit {
    @Input() label: LabelEdition
    labelForm: FormGroup
    submitPending = false

    constructor(private fb: FormBuilder, private labelService: LabelEditionService) {
        this.labelForm = this.fb.group({
            labelValue: '',
            help: '',
        });
    }

    ngOnInit() {
        console.log(this.label)
        this.labelForm.patchValue({"help": this.label.help, "labelValue": this.label.value})
    }

    onSubmit() {
        this.submitPending = true
        this.labelService
            .update(new LabelEdition(this.label.key, this.labelForm.get("labelValue").value, this.labelForm.get("help").value, this.label.lang))
            .subscribe(
                null,
                (e) => console.log("error", e),
                () => this.submitPending = false
            )

    }
}
