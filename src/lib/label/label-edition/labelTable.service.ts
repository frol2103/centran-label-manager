import {Injectable, OnInit} from "@angular/core";
import {LabelService} from "../label.service";
import {LabelEdition} from "./labelEdition.service";
import {Observable} from "rxjs/Observable";
import {Rxios} from "rxios";


@Injectable()
export class LabelTableService {

  private urlPrefix : string;
  private rxios : Rxios;

  constructor(private labelService: LabelService) {
    this.urlPrefix = "/labelmanager/app/" + this.labelService.appName;
    this.rxios = new Rxios({
        baseURL: this.urlPrefix
    })
  }

  public getData():Observable<LabelEdition[]> {
    return this.rxios.get("/label")
  }
}
