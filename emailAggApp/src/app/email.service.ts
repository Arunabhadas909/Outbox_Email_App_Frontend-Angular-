import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Email } from './interfaces/interface';

import { map,filter } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
private apiUrl = 'https://outbox-email-app-backend.onrender.com';

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  getEmails(): Observable<Email[]> {

    console.log("emails here : " )
    return this.http.get<Email[]>(`${this.apiUrl}/emails`)
    
    
    // .pipe(

 
      // map(

    //       emails => ({


    //           subject: emails.subject,
    //           from: emails.from,
    //         to: Array.isArray(parsed.to)
    //       ? parsed.to.map((a: any) => a.name || a.address).join(', ')
    //       : parsed.to?.value.map((v: any) => v.name || v.address).join(', ') || '',
    //           date: parsed.date,
    //           text: parsed.text,
    //           html: parsed.html
    // };
          // })
      // )


   


    // );
  }





}
