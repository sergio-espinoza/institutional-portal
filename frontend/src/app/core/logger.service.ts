import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class LoggerService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  public log(msg: string, pClass?: string): void {
    console.log(msg);
    this.snackbar.open(msg, '✔️', {
      duration: 5000,
      panelClass: [pClass ? pClass : 'bg-dark']
    });
  }
}

