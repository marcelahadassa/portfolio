import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { PresentationComponent } from '../../layouts/presentation/presentation.component';
import { AboutComponent } from "../../layouts/about/about.component";
import { ResumeComponent } from "../../layouts/resume/resume.component";
import { ContactComponent } from "../../layouts/contact/contact.component";
import { PortfolioComponent } from "../../layouts/portfolio/portfolio.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    PresentationComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    PortfolioComponent
],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
}
