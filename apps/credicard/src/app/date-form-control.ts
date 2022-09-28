import { FormControl } from '@angular/forms';

export class DateFormControl extends FormControl{

  override setValue(value: string, options: any){
    if (value.match(/[^0-9|\/]/gi) || value.length > 5) {
      this.setDateValue(this.value, options);
      return;
    }


    if (value.length === 2 && this.value.length === 3) {
      this.setDateValue(value.slice(0, 1), options);
      return;
    }

    if(value.length === 2){
      value = value + '/';
      this.setDateValue(value, options);
      return;
    }

    this.setDateValue(value, options);
  }

  setDateValue(value: string, options: any) {
    super.setValue(value, {
      ...options,
      emitModelToViewChange: true
    });
  }
}
