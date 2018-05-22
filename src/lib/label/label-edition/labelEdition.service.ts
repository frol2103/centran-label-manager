import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject, Subject} from "rxjs";
import {LabelService} from "../label.service";
import {Rxios} from "rxios";

export class LabelEdition {
  constructor(public key: string, public value: string, public help: string, public lang: string) {
  }
}


@Injectable()
export class LabelEditionService {
    private labels: Subject<LabelEdition[]> = new BehaviorSubject([])
    private urlPrefix : string
    private loaded: boolean = false;
    private rxios : Rxios;

    constructor(private labelService: LabelService) {
        this.urlPrefix = "/labelmanager/app/" + this.labelService.appName;
        this.rxios = new Rxios({
            baseURL: this.urlPrefix
        })
        //we do this to cache the result of the http request.  If we directly map the observer, as it is lazy, http calls will be done for every label
        this.labelService.lang.mergeMap(l => {
            console.log("We are trying things " + this.rxios.get("/file/" + l).toPromise().then(value => value))
            return this.rxios.get("/file/" + l).toPromise()
        })
            .map((res: Promise<any>) => res)
            .map((res : any) => {
                console.log("Here " + res)
                const l = this.labels.next(res)
                this.loaded = true
                return l
            })
            .catch((error : any) => {
                console.log("Error in here " + error)
                return Observable.throw(error);
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

    getMultilingualLabel(key: string): Observable<any> {
        return this.rxios.get("/label/" + key);
    }

    getLabel(key: string): Observable<LabelEdition> {
        const service = this
        return this.labels.map(labels => labels[key]).map(function (l) {
            // if (l) {
            //     l.key = key
            // } else if (service.loaded) {
            //     console.log("missing label :" + key);
            //     let nLabel:LabelEdition = new LabelEdition(key, null, null, service.getLang());
            //     console.log("Missing label new "+nLabel);
            //     service
            //         .update(nLabel)
            //         .subscribe(
            //             null,
            //             (e : Error) => console.log("error", e)
            //         )
            // }
            return l
        })
    }

    update(label: LabelEdition): Observable<{}> {
        return this.rxios.put("/label", label).do(v => this.refreshLabels())
    }

    getLang(){
        return this.labelService.lang.getValue();
    }

}