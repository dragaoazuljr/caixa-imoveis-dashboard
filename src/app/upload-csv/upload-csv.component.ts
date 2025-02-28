import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { uploadCsv } from '../store/imovel.actions';

@Component({
  selector: 'app-upload-csv',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './upload-csv.component.html',
  styleUrl: './upload-csv.component.scss'
})
export class UploadCsvComponent {
  selectedFile: File | null = null;
  errorMessage: string = '';

  constructor(private store: Store) {}

  onFileChange(event: any): void {
    this.selectedFile = (event.target as HTMLInputElement).files?.[0] || null;
  }

  uploadFile(): void {
    if (!this.selectedFile) {
      this.errorMessage = 'Please select a CSV file.';
      return;
    }

    this.store.dispatch(uploadCsv({ file: this.selectedFile }));
    console.log('File selected:', this.selectedFile);
    this.errorMessage = '';
  }
}
