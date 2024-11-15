import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cancel-component',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './cancel-component.component.html',
  styleUrl: './cancel-component.component.css'
})
export class CancelComponentComponent {


  placeholderText: string = ' ex: Urgent meeting cam up';

  form = new FormGroup({
    cancelReason:new FormControl(''),
  });

  onSubmit() {
    console.log(this.form.value.cancelReason)
  }


}
