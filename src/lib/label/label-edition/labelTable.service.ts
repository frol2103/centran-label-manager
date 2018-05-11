import {Injectable, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {LabelService} from "../label.service";
import {LabelEdition} from "./labelEdition.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class LabelTableService implements OnInit {

  ngOnInit(): void {

  }
  private urlPrefix : string;

  constructor(private http: HttpClient, private labelService: LabelService) {
    this.urlPrefix = "/labelmanager/app/" + this.labelService.appName;
  }

  public getData():Observable<LabelEdition[]> {
    return this.http.get(this.urlPrefix + "/label")
      .map((res : any) => res.json());
  }
}
