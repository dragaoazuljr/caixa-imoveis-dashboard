import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UploadCsvComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
