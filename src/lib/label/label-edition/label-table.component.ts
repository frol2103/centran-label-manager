import {Component, TemplateRef} from "@angular/core";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {LabelEdition, LabelEditionService} from "./labelEdition.service";
import {LabelTableService} from "./labelTable.service";
import {PaginationInstance} from "ngx-pagination";

@Component({
  selector: 'label-table',
  templateUrl: './label-table.component.html',
})
export class LabelTable {

  languages: string[] = [];
  keys: string[] = [];
  labels: any;
  modalRef: BsModalRef;

  keyForEdit:string=null;

  nbrItemsPerPages = [5,10,25,50,100,500,1000];

  public config: PaginationInstance = {
    itemsPerPage: 5,
    currentPage: 1
  };

  constructor(private modalService: BsModalService,private labelService: LabelEditionService, private labelTableService:LabelTableService) {
    this.languages = labelService.languages;
  }

  show(template: TemplateRef<any>) {
    this.keys = [];
    this.labelTableService.getData().subscribe(data => {
      this.labels = data;
      for(let e in this.labels){
        this.keys.push(e);
      }
      this.modalRef = this.modalService.show(template,{class: 'modal-custom-lg'});
    }, error => {
      console.error("Error loading labels :" +error);
    });
  }

  edit(value:string){
    this.keyForEdit = value;
  }

  addLabel(value:string){
    this.labelService
      .update(new LabelEdition(value, null, null, 'FR'))
      .subscribe(
        null,
        (e) => console.error("error", e),
        () => this.back()
      )
  }

  back(){
    this.keyForEdit = null;
    this.keys = [];
    this.labelTableService.getData().subscribe(data => {
      this.labels = data;
      for(let e in this.labels){
        this.keys.push(e);
      }
    }, error => {
      console.error("Error loading labels :" +error);
    });
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
  }

  getLabel(key:string, lang: string) {
    let found = this.labels[key].find((l:any) => l.lang === lang)
    if (found) {
      return found;
    } else {
      return new LabelEdition(key, null, null, lang)
    }
  }

  close(){
    this.keyForEdit = null;
    this.modalRef.hide()
  }


}