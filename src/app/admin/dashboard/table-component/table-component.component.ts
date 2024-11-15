import { Component, EventEmitter, Output } from '@angular/core';
import { faCalendar, faCheck, faHourglass, faXmark, faExclamationTriangle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SceduleComponentComponent } from "../scedule-component/scedule-component.component";
import { CancelComponentComponent } from "../cancel-component/cancel-component.component";
import { ServiceService } from '../../../service.service';
import { Router } from '@angular/router';
import * as bootstrap from 'bootstrap';
import { data, tableData } from '../../../Data/TableData';



@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [FontAwesomeModule, SceduleComponentComponent, CancelComponentComponent],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css'
})
export class TableComponentComponent {


  modelText:string='';
  modelId:string='';
  data:tableData[]=data;


  constructor(private service:ServiceService,public route:Router)
  {

  }

 

  faCheck = faCheck
  faXmark = faXmark
  faHourglass = faHourglass
  faSearch = faSearch

  headerText: string = '';
  headerSubText: string = '';
  scheduleCilik:boolean=false;



  onCancel() {
    
    this.scheduleCilik=false;
    this.headerText = 'Cancel Appointment';
    this.headerSubText = 'Are you sure you want to cancel your appointment';
  }

  ngAfterViewInit(){

     this.onSchedule();
  }
  onSchedule() {
      
   this.scheduleCilik=true
   this.headerText = 'Schedule Appointment';
   this.headerSubText = 'Please fill in the following details to schedule';
    
  }
 

  modelMethod()
  {
    this.modelText="model"
    this.modelId="#exampleModal"
  }

}
function onSchedule() {
  throw new Error('Function not implemented.');
}

