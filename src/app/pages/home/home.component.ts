import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule, 
    HeaderComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
