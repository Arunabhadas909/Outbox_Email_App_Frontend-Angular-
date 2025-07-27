import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/email.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


   email = '';
  password = '';
  constructor(private emailService: EmailService, private router: Router) {}

  onSubmit() {
    this.emailService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/inbox']),
      error: err => alert('Login failed')
    });
  }




}
