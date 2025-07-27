import { Component, OnInit, Output } from '@angular/core';
import { EmailService } from 'src/app/email.service';
import { Email } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
emails: Email[] = [];
  selectedEmail: Email = {

      subject: undefined,
  from: undefined,
  to: undefined,
  date: undefined,
  text: undefined,
  html: undefined,
  };

  constructor(private emailService: EmailService) {}

  ngOnInit() {

    console.log("Entered inbox")
    this.emailService.getEmails().subscribe((list: Email[]) => {
      this.emails = list;

      console.log(list);

      console.log(this.emails);
    console.log(this.selectedEmail);
    
    
  });
  }

  onEmailSelect(email: Email) {
    this.selectedEmail = email;

    console.log(this.selectedEmail);
  }
}
