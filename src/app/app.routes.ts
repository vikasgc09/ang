import { Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { AboutComponent } from './components/about/about.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { CrudComponent } from './components/crud/crud.component';

export const routes: Routes = [
    { path: 'card', component: CardComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'crud', component: CrudComponent },
  ];
