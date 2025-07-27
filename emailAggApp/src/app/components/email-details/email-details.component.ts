import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { EmailService } from 'src/app/email.service';
import { Email } from 'src/app/interfaces/interface';



@Component({
  selector: 'app-email-details',
  templateUrl: './email-details.component.html',
  styleUrls: ['./email-details.component.css']
})
export class EmailDetailsComponent {
    @Input() email!: Email;
    suggestedReply: string = '';

  constructor( private http : HttpClient){}



getSuggestedReply(emailText: string | undefined) {
  if (!emailText) return;

  this.http.post<{ reply: string }>('https://outbox-email-app-backend.onrender.com/suggest-reply', {
    emailText: emailText,
  }).subscribe((res) => {
    this.suggestedReply = res.reply;
  });
}
}



