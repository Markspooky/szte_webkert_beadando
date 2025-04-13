import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NgIf } from '@angular/common';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SectiontitleComponent } from './shared/components/sectiontitle/sectiontitle.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ServicesComponent,HomeComponent,ContactComponent,NgIf,FooterComponent,HeaderComponent,SectiontitleComponent,AboutusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'beadando';

  page = "home"

  changePage(selectedPage : string) {
    this.page = selectedPage;
  }

}
