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

  weatherLive(): void {
    window.open('https://weatherzone-4tow.onrender.com/');
  }

  weatherCode(): void {
    window.open('https://github.com/athenacats/weatherapp');
  }

  nalelaLive(): void {
    window.open('https://nalelahairandbeauty.com/');
  }

  freakywordLive(): void {
    window.open('https://thefreakylink.com/');
  }
  tintifyLive(): void {
    window.open('https://tintify.com.au/');
  }

  amaLive(): void {
    window.open('https://www.amapm.ca/');
  }

  herculeanLive(): void {
    window.open('https://herculean-strength.vercel.app/');
  }

  herculeanCode(): void {
    window.open('https://github.com/athenacats/herculean-strength');
  }
}
