import {Component, Input, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Label, LabelService} from "./label.service";


@Component({
  selector: 'label-edit-form',
  templateUrl: './label-edit-form.component.html',
})
export class LabelEditForm implements OnInit {
    @Input() label: Label;
    labelForm: FormGroup;
    submitPending = false;

    constructor(private fb: FormBuilder, private labelService: LabelService) {
        this.labelForm = this.fb.group({
            multiline: false,
            labelValue: '',
            help: '',
        });
    }

    ngOnInit() {
        this.labelForm.patchValue({"help": this.label.help, "labelValue": this.label.value, "multiline": this.label.multiline})
    }

    onSubmit() {
        this.submitPending = true
        this.labelService
            .update(new Label(this.label.key, this.labelForm.get("labelValue").value, this.labelForm.get("help").value, this.label.lang, this.labelForm.get("multiline").value))
            .subscribe(
                null,
                (e) => console.log("error", e),
                () => {
                    this.labelService.refreshLabels();
                    this.submitPending = false
                }
            )

    }
}
