import {Component} from "@angular/core";
import {LabelProductionService} from "./labelProduction.service";

@Component({
  selector: 'label-lang-switch',
  templateUrl: './label-lang-switch-component-production.component.html',
})
export class LabelLangSwitchComponentProduction {

  languages: string[] = []

  setLang(lang : any): void {
    this.labelService.changeLang(lang)
  }

  constructor(private labelService: LabelProductionService) {
    this.languages = labelService.languages
  }
}
