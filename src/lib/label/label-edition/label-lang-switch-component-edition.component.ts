import {Component} from "@angular/core";
import {LabelEditionService} from "./labelEdition.service";

@Component({
  selector: 'label-lang-switch',
  templateUrl: './label-lang-switch-component-edition.component.html',
})
export class LabelLangSwitchComponentEdition {

  languages: string[] = []

  setLang(lang : any): void {
    this.labelService.changeLang(lang)
  }

  constructor(private labelService: LabelEditionService) {
    this.languages = labelService.languages
  }
}
