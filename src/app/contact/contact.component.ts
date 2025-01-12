import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { text } from 'stream/consumers';

interface IUser {
  userName: string;
  userAge: string;
  userEmail: string;
  userPassword: string;
}





@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
text :string ='';
formData :IUser={
  userName:'',
  userAge:'',
  userEmail:'',
  userPassword:'',
}
}
