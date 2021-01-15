import { Component, OnInit} from '@angular/core';

import { FormGroup, FormControl} from '@angular/forms';

import { Person } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  // title = 'Jennifer Jabagat';

  // name = "";
  // default = "Park";

  // check(){
  //   if (this.name == this.default){
  //     alert("The Same");
  //   this.reset();
  //   }else{
  //   }
  // }

  // reset(){
  //   this.name = "";
  // }

  // // BUILDING REUSABLE COMPONENTS
  // // Input Properties
  // title = 'App Component';
  // firstNameA = 'JaeNee';
  // lastNameA = 'Park';
  // fullName = '';

  // getFullName(event: Event){
  //   // alert(event);
  //   this.fullName = String(event);
  // }
  
  // title="App Component";
  // firstNameA = "";
  // lastNameA = "";
  // fullNameA = "";
  // Age = "";
  // currentAge = "";

  // getFullName(event: Event){
  //   this.fullNameA = String(event);
  // }

  // getCurrentAge(event: Event){
  //   this.currentAge = String(event);
  // }


  // DIRECTIVES
  title = "Reusable Component";
  // name= "";
  // names = ['JaeNee', 'Selena', 'Luna', 'Moon'];

  // addName(){
  //   this.names.push(this.name);
  //   this.name="";
  // }

  
  // person="";
  persons: Person[] = [
    { firstName: 'JaeNee', lastName: 'Park', age: 19, nationality: "Korean", gender: 'Female'},
    { firstName: 'CheonSa', lastName: 'Do', age: 17, nationality: 'Korean', gender: 'Female'},
    { firstName: 'Lianna Marie', lastName: 'Jabagat', age: 8, nationality: 'Filipino', gender: 'Female'},
    { firstName: 'Christian Grey', lastName: 'De Los Santos', age: 22, nationality: '', gender: 'Male'},
    { firstName: 'Chan Averforth', lastName: 'Alfonso', age: 18, nationality: 'Filipino', gender: 'Male'}
  ]

  userProfile: FormGroup;

  constructor(){ }

  ngOnInit(): void{
    this.userProfile = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      age: new FormControl(),
      nationality: new FormControl(),
      gender: new FormControl(),
    })
  }

  addUser(values: any){
    this.persons.push(this.userProfile.value);
    this.userProfile.reset();
    // console.log(this.userProfile.value);
  }
 

  delete(){
    // this.persons.splice(this.persons.findIndex(this.userProfile., 1));
    // const index = this.persons.indexOf(lastName);
    // console.log(person.lastName);
  }

}

