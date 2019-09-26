import { Component, OnInit } from '@angular/core';
import {LabelService} from '@centran/centran-label-manager';

@Component({
  selector: 'app-test-label',
  templateUrl: './test-label.component.html',
  styleUrls: ['./test-label.component.css']
})
export class TestLabelComponent implements OnInit {

  constructor(private labelService : LabelService) { }

  parameterMap = new Map();

  ngOnInit() {
    this.parameterMap.set('date','02/08/2019');
  }

}
