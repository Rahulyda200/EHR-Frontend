import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppointmentDetailsComponent } from '../appointment-details/appointment-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.appointmentForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      serviceType: [''],
      serviceName: [''],
      reason: [''],
      date: [''],
      appointmentType: [''],
      timeSlot: ['']
    });
  }

  onSubmit() {
    // console.log(this.appointmentForm.value);
    this.dialog.open(AppointmentDetailsComponent, {
      data: this.appointmentForm.value,
      width: '500px',  
      height: 'auto',  
      panelClass: 'custom-dialog' 
    });
  }

  selectTimeSlot(time: string) {
    this.appointmentForm.patchValue({ timeSlot: time });
  }

  isSelectedTimeSlot(time: string): boolean {
    return this.appointmentForm.get('timeSlot')?.value === time;
  }
}
