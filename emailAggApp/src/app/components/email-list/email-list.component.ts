import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { Email } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent {

  @Input() emails: Email[] = [];
  @Output() selectEmail = new EventEmitter<Email>();


}
