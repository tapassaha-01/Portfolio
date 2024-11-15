import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SceduleComponentComponent } from "../scedule-component/scedule-component.component";
import { CancelComponentComponent } from "../cancel-component/cancel-component.component";
import { ServiceService } from '../../../service.service';

@Component({
  selector: 'app-dialog-component',
  standalone: true,
  imports: [SceduleComponentComponent, CancelComponentComponent],
  templateUrl: './dialog-component.component.html',
  styleUrl: './dialog-component.component.css'
})
export class DialogComponentComponent implements OnInit {

  @ViewChild('modalContent', { read: ViewContainerRef }) modalContent!: ViewContainerRef;
  

  headerText: string = '';
  headerSubText: string = '';
  scheduleClick!:boolean;


  constructor(private componentFactoryResolver: ComponentFactoryResolver, private service:ServiceService)
  {
     
  }

  ngOnInit() {

    
    if (this.service.getClicked() == true) {
      this.headerText = 'Schedule Appointment';
      this.headerSubText = 'Please fill in the following details to schedule';
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SceduleComponentComponent);
      // this.modalContent.clear(); // Clear any existing content
      this.modalContent.createComponent(componentFactory);
    }
    else {
      this.headerText = 'Cancel Appointment';
      this.headerSubText = 'Are you sure you want to cancel your appointment';
    }
  }



}
