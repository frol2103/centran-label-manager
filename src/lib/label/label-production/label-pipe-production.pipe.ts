import {Pipe, PipeTransform} from "@angular/core";
import {LabelProductionService} from "./labelProduction.service";
import {Observable} from "rxjs";


@Pipe({name: 'label'})
export class LabelPipeProduction implements PipeTransform {
  constructor(private labelService: LabelProductionService) {

  }

  transform(key: string): Observable<string> {
    return this.labelService.getLabel(key).map(l => ((l) ? l.value : key))
  }
}
