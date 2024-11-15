import { Component, Inject } from '@angular/core';
import { faCalendar, faCheck, faHourglass, faXmark, faExclamationTriangle, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from '../../../service.service';


@Component({
  selector: 'app-scedule-component',
  standalone: true,
  imports: [FontAwesomeModule, ReactiveFormsModule, FormsModule],
  templateUrl: './scedule-component.component.html',
  styleUrl: './scedule-component.component.css'
})
export class SceduleComponentComponent {


 
  faSearch = faSearch
  form = new FormGroup(
    {
      doctorName: new FormControl(''),
      appointmentReason: new FormControl(' '),
      appointmentDate: new FormControl(' ')
    }
  )

  onSubmit() {
    console.log(this.form.value)
  }
}
