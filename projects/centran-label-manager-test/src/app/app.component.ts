import { Component } from '@angular/core';
import {LabelService} from 'projects/centran-label-manager/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'centran-label-manager-test';

  constructor(private labelService : LabelService) { }

  parameterMap = new Map();

  ngOnInit() {
    this.parameterMap.set('date','02/08/2019');
    this.labelService.canEdit = true;
  }
}
