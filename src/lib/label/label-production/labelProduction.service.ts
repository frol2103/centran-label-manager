import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject, Subject} from "rxjs";
import {Http} from "@angular/http";
import {LabelService} from "../label.service";

export class Label {
  constructor(public key: string, public value: string, public help: string) {
  }
}

@Injectable()
export class LabelProductionService {
    private labels: Subject<Label[]> = new BehaviorSubject([])

    constructor(private http: Http, private labelService: LabelService) {

        //we do this to cache the result of the http request.  If we directly map the observer, as it is lazy, http calls will be done for every label
        this.labelService.lang.mergeMap(l => this.http.get(this.labelService.config.labelsFolderPath + "labels" + l + ".json"))
            .map(res => res.json())
            .catch(e => {
                console.error("Error while loading lang file")
                return Observable.of({})
            })
            .map(res => this.labels.next(res))
            .subscribe()
    }

    public get languages(): string[] {
        return this.labelService.languages;
    }

    changeLang(lang: string) {
        this.labelService.changeLang(lang)
    }

    getLabel(key: string): Observable<Label> {
        return this.labels.map(labels => labels[key])
    }

    getLang(){
        return this.labelService.lang.getValue();
    }


}
