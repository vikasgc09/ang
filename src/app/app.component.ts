import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    CardComponent,
    AboutComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'angV';
}
