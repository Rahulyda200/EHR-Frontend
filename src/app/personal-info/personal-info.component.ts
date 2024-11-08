import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentDetailsComponent } from '../appointment-details/appointment-details.component';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.appointmentForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      serviceType: ['', Validators.required],
      serviceName: ['', Validators.required],
      reason: ['', Validators.required],
      date: ['', Validators.required],
      appointmentType: ['', Validators.required],
      timeSlot: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.dialog.open(AppointmentDetailsComponent, {
        data: this.appointmentForm.value,
        width: '900px',
        height: '450px',
        panelClass: 'custom-dialog'
      });
    } else {
      this.appointmentForm.markAllAsTouched();  
    }
  }

  selectTimeSlot(time: string) {
    this.appointmentForm.patchValue({ timeSlot: time });
  }

  isSelectedTimeSlot(time: string): boolean {
    return this.appointmentForm.get('timeSlot')?.value === time;
  }
}
