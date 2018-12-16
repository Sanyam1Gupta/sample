import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {



  profileForm = new FormGroup({
    workName: new FormControl('',[Validators.required])
  });

  

  author: string[]=[];
  formErrors = {
    'workName': ''
  };

  validationMessages = {
    'workName': {
        'required': 'Work Name is required.'
    },
  };

  constructor() { 
    this.profileForm.valueChanges
       .subscribe(data => this.onValueChanged(data));

       this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.profileForm) { return; }
    const form = this.profileForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.profileForm.value.workName);
    this.author.push(this.profileForm.value.workName);
    console.log(this.author);

    this.profileForm.reset({
      workName: '',
    });
  }

  onclick(au: string){
    var index = this.author.indexOf(au);
 
    if (index > -1) {
       this.author.splice(index, 1);
    }
  }


}
