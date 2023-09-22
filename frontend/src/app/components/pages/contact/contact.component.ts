import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  mailTo(): void {
    window.open('mailto:chenalonya@gmail.com');
  }

  linkedIn(): void {
    window.open('https://www.linkedin.com/in/esther-lonyangapuo/');
  }

  github(): void {
    window.open('https://github.com/athenacats/');
  }
}
