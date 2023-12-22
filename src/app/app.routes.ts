import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    { path: 'card', component: CardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
  ];
