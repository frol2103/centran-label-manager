import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject, Subject} from "rxjs";
import {LabelService} from "../label.service";
import {Rxios} from "rxios";

export class Label {
  constructor(public key: string, public value: string, public help: string) {
  }
}

@Injectable()
export class LabelProductionService {
    private labels: Subject<Label[]> = new BehaviorSubject([])
    private rxios : Rxios;

    constructor( private labelService: LabelService) {

        this.rxios = new Rxios({
            baseURL: this.labelService.config.labelsFolderPath
        })
        //we do this to cache the result of the http request.  If we directly map the observer, as it is lazy, http calls will be done for every label
        this.labelService.lang.mergeMap(l => this.rxios.get("labels" + l + ".json"))
            .map((res : any) => res.json())
            .catch(e => {
                console.error("Error while loading lang file")
                return Observable.of({})
            })
            .map(res  => this.labels.next(res))
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
