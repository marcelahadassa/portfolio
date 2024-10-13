import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { PresentationComponent } from '../../layouts/presentation/presentation.component';
import { AboutComponent } from "../../layouts/about/about.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    PresentationComponent,
    AboutComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
}
