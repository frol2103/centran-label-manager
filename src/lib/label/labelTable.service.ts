import {Injectable} from "@angular/core";
import {Label, LabelService} from "./label.service";
import {Observable} from "rxjs/Observable";
import {Rxios} from "rxios";


@Injectable()
export class LabelTableService {

  private urlPrefix : string;
  private rxios : Rxios;

  constructor(private labelService: LabelService) {
    this.rxios = new Rxios({
        baseURL: this.labelService.labelSourceUrl
    })
  }

  public getData():Observable<Label[]> {
    return this.rxios.get("/label")
  }
}
