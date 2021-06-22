import {Injectable, Injector} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";

const usersData = {
  "users": [
    {
      "name": "chidume nnamdi",
      "age": 26
    },
    {
      "name": "chisom",
      "age": 46
    },
    {
      "name": "elvis",
      "age": 21
    },
    {
      "name": "osy mattew",
      "age": 21
    },
    {
      "name": "valentine",
      "age": 21
    },
  ]
};

@Injectable()
export class BackendMockInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("response")
    return of(new HttpResponse({status: 200, body: usersData}));
  }
}

