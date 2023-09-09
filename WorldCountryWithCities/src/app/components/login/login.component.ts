import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginRequest, LoginResult } from '../../models/common';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup = new FormGroup({});
  loginResult: LoginResult = new LoginResult(false, '');

  constructor(private fb: FormBuilder, private authService: CommonService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const request: LoginRequest = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      };

      this.authService.login(request)
        .subscribe(
          (result) => {
            this.loginResult = result;
            if (result.success) {
              console.log('Login successful!');
              console.log('JWT Token:', result.token);
            } else {
              console.log('Login failed:', result.message);
            }
          },
          (error) => {
            console.error('An error occurred during login:', error);
          }
        );
    }
  }
}
