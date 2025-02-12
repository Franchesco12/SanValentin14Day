import { Component } from '@angular/core'; // Ajusta la ruta
import { ValentinComponent } from './valentin.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ValentinComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
