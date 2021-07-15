import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  FormData: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      FullName: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      PhoneNumber: new FormControl('', [Validators.required]),
      Message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData) {
    console.log(FormData);
    this.contact.PostMessage(FormData).subscribe(
      (response: any) => {
        location.href = 'https://mailthis.to/confirm';
        console.log(response);
      },
      (error: { responseText: any }) => {
        console.warn(error.responseText);
        console.log({ error });
      },
    );
  }
}
