import {Inject, Injectable} from '@angular/core';
import {LabelConfig} from "./label.config";
import {BehaviorSubject} from "rxjs";
import {CookieService} from "./cookie/cookie.service";

@Injectable()
export class LabelService {
  public lang: BehaviorSubject<string>;
  public urlPrefix: any

  constructor(@Inject('config') public config: LabelConfig, private cookieService: CookieService) {
    this.lang = new BehaviorSubject<string>(this.languages[0])
    this.urlPrefix = "/labelmanager/app/" + this.appName;
    this.lang.next(this.cookieService.getCookie("ccffuser3").toUpperCase())

  }

  public get languages(): string[] {
    return this.config.languages;
  }

  public get appName(): string {
    return this.config.appName;
  }

  public changeLang(lang: string) {
    this.lang.next(lang)
  }

}
