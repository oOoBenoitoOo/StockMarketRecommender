import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error): void {
    console.error('error :', error);
    alert(`error : ${error.message}`);
  }
}
