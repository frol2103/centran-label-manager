import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject, Subject} from "rxjs";
import {Http, Response} from "@angular/http";
import {LabelService} from "../label.service";

export class LabelEdition {
  constructor(public key: string, public value: string, public help: string, public lang: string) {
  }
}


@Injectable()
export class LabelEditionService {
  private labels: Subject<LabelEdition[]> = new BehaviorSubject([])
  private urlPrefix: any;
  private loaded: boolean = false;

  constructor(private http: Http, private labelService: LabelService) {
    this.urlPrefix = "/labelmanager/app/" + this.labelService.appName;

    //we do this to cache the result of the http request.  If we directly map the observer, as it is lazy, http calls will be done for every label
    this.labelService.lang.mergeMap(l => this.http.get(this.urlPrefix + "/file/" + l))
      .map(res => res.json())
      .map(res => {
        const l = this.labels.next(res)
        this.loaded = true
        return l
      })
      .subscribe()
  }

  public get languages(): string[] {
    return this.labelService.languages
  }

  changeLang(lang: string) {
    this.labelService.changeLang(lang)
  }

  refreshLabels() {
    this.changeLang(this.labelService.lang.getValue())
  }

  getMultilingualLabel(key: string): Observable<LabelEdition[]> {
    return this.http.get(this.urlPrefix + "/label/" + key)
      .map(r => r.json())
  }

  getLabel(key: string): Observable<LabelEdition> {
    const service = this
    return this.labels.map(labels => labels[key]).map(function (l) {
      if (l) {
        l.key = key
      } else if (service.loaded) {
        console.log("missing label :" + key)
      }
      return l
    })
  }

  update(label: LabelEdition): Observable<Response> {
    return this.http.put(this.urlPrefix + "/label", label).do(v => this.refreshLabels())
  }

}
