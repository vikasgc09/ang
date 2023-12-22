import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CardComponent } from '../components/card/card.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactsComponent } from '../components/contacts/contacts.component';

const routes: Routes = [
  { path: 'card', component: CardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
];

@NgModule({
  declarations: [
    


  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),

  ]
})
export class RoutingModuleModule { }
