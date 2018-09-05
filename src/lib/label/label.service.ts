import {Inject, Injectable} from '@angular/core';
import {LabelConfig} from "./label.config";
import {BehaviorSubject} from "rxjs";
import {Subject} from "rxjs/Subject";
import {Rxios} from "rxios";
import {Observable} from "rxjs/Observable";

export class Label {
    constructor(public key: string, public value: string, public help: string, public lang: string) {
    }
}

@Injectable()
export class LabelService {

    private labels: Subject<Label[]> = new BehaviorSubject([])
    private loaded: boolean = false;
    private rxios: Rxios;

    public lang: BehaviorSubject<string>;

    constructor(@Inject('config') public config: LabelConfig) {
        this.lang = new BehaviorSubject<string>(this.languages[0])
        this.rxios = new Rxios({
            baseURL: this.labelSourceUrl
        })


        this.lang.mergeMap(l => {
            return this.rxios.get(this.urlPrefix + l + this.urlSuffix).toPromise()
        })
            .map((res: Promise<any>) => res)
            .map((res: any) => {
                const l = this.labels.next(res)
                this.loaded = true
                return l
            })
            .catch((error: any) => {
                console.log("Error in here " + error)
                return Observable.throw(error);
            })
            .subscribe()
    }

    public get languages(): string[] {
        return this.config.languages;
    }

    public get appName(): string {
        return this.config.appName;
    }

    public get labelSourceUrl(): string {
        return this.config.labelSourceUrl;
    }

    public get prod() : boolean {
        return this.config.prod;
    }

    public get urlPrefix() : string {
        return this.config.urlPrefix;
    }

    public get urlSuffix(): string {
        return this.config.urlSuffix;
    }

    public changeLang(lang: string) {
        this.lang.next(lang)
    }

    update(label: Label): Observable<{}> {
        return this.rxios.put("/label", label).do(v => this.refreshLabels())
    }

    getLabel(key: string): Observable<Label> {
        return this.labels.map(labels => labels[key]).map(function (l) {
            return l
        })
    }

    refreshLabels() {
        this.changeLang(this.lang.getValue())
    }

    getMultilingualLabel(key: string): Observable<any> {
        return this.rxios.get("/label/" + key);
    }


}
