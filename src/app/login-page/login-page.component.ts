import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee ,faPhone} from '@fortawesome/free-solid-svg-icons';
import { faUser,faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FontAwesomeModule,
    ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  faCoffee = faCoffee;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router) {
    this.registrationForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
      console.log('Form Submitted!', this.registrationForm.value);
      this.router.navigate(['/user/patient-form-page']);
  }
}
