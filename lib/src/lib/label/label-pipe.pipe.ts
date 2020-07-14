import {Pipe, PipeTransform} from '@angular/core';
import {Observable} from 'rxjs';
import {LabelService} from './label.service';
import {map} from 'rxjs/operators';


@Pipe({name: 'label'})
export class LabelPipe implements PipeTransform {
  constructor(private labelService: LabelService) {

  }

  transform(key: string): Observable<string> {
    return this.labelService.getLabel(key).pipe(map(l => ((l) ? l.value : key)));
  }
}
