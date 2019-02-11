import {Injectable} from "@angular/core";
import {Label, LabelService} from "./label.service";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/dom/ajax';
import {ajax} from "rxjs/observable/dom/ajax";


@Injectable()
export class LabelTableService {



  constructor(private labelService: LabelService) {

  }

  public getData():Observable<Label[]> {

    let get$ = ajax({
      url: this.labelService.labelSourceUrl + "/label",
        method:'GET'
    }).map(e=> e.response)
    return get$;
  }
}
