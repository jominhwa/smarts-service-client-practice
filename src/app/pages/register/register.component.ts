import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private formBuilder: FormBuilder) {}

  registerForm = this.formBuilder.group({
    //반드시 입력되어야 하며, 이메일 형식에 맞춰 작성해야 함.
    email: ['', [Validators.required, Validators.email]],
    //반드시 입력되어야 하며, 최소 6글자 이상이어야 함.
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}
