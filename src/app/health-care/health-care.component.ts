import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-care',
  templateUrl: './health-care.component.html',
  styleUrls: ['./health-care.component.css']
})
export class HealthCareComponent {
  // List of options for Polyclinics and Hospitals
  polyclinics = ['Solexys Healthcare Polyclinic', 'National University Polyclinic', 'Malaysia Health Polyclinics'];
  hospitals = ['Malaysia General Hospital'];

  constructor(private router:Router){}
  
  // Additional options for a specific polyclinic
  polyclinicOptions = ['Option 1', 'Option 2', 'Option 3'];
  
  selectedInstitute: string | null = null;

  onNext() {
    // Logic to handle "Next" button click
    console.log('Selected Institute:', this.selectedInstitute);
    this.router.navigate(['personal-info'])
    // Navigate or perform actions as needed
  }
}
