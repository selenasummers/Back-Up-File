import { Component, OnInit} from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{



  userForm: FormGroup;

  constructor(){ }

  ngOnInit(): void{
    this.userForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      address: new FormGroup({
        barangay: new FormControl(),
        municipality: new FormControl()
      })
    })
  }

  test(value: any){
    // alert("Reactive Form");
    console.log(value)
  }
}
