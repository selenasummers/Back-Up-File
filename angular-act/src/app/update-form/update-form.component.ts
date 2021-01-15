import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  firstName;
  lastName;
  age;
  nationality;
  gender;


  constructor() { }

  ngOnInit(): void {
  }

  update(key: any){
    console.log(key)
  }

}
