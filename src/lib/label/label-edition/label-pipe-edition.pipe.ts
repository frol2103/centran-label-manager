import {Pipe, PipeTransform} from "@angular/core";
import {LabelEditionService} from "./labelEdition.service";
import {Observable} from "rxjs";


@Pipe({name: 'label'})
export class LabelPipeEdition implements PipeTransform {
  constructor(private labelService: LabelEditionService) {

  }

  transform(key: string): Observable<string> {
    return this.labelService.getLabel(key).map(l => ((l) ? l.value : key))
  }
}
