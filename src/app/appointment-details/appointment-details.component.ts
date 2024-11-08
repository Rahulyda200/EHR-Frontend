import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css'],
})
export class AppointmentDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AppointmentDetailsComponent>
  ) {}

  onConfirm() {
    if (this.isDataValid()) {
      Swal.fire({
        title: '',
        text: 'Your appointment has been successfully scheduled.Thank you for choosing our services!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      console.log('Appointment Details:', this.data);
      this.dialogRef.close();
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',
        confirmButtonText: 'Try Again',
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  isDataValid(): boolean {
    return (
      // this.data.firstName &&
      // this.data.lastName &&
      // this.data.email &&
      // this.data.phone &&
      this.data.serviceType &&
      // this.data.serviceName &&
      // this.data.reason &&
      this.data.date &&
      // this.data.appointmentType &&
      this.data.timeSlot
    );
  }
}
