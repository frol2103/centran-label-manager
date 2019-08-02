import {Component, Injectable, Renderer2} from '@angular/core';


@Injectable()
class MyService {
  renderer : Renderer2;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
