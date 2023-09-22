import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  somaLive(): void {
    window.open('https://soma-production.up.railway.app/');
  }

  somaCode(): void {
    window.open('https://github.com/athenacats/soma');
  }

  freakyLive(): void {
    window.open('https://thefreakylink.onrender.com/');
  }

  freakyCode(): void {
    window.open('https://github.com/athenacats/freakylinkweb');
  }
}
