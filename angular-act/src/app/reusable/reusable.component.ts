import { Component, Output, Input, EventEmitter} from '@angular/core';
import { Person } from '../models';


@Component({
  selector: 'app-reusable',
  templateUrl: './reusable.component.html',
  styleUrls: ['./reusable.component.css']
})
export class ReusableComponent{

  // DIRECTIVES 
  // @Input() name = '';

  @Input() person: Person;
  @Output() personInfo = new EventEmitter;

  // forNationality = true;
  // click = false;
  // show(){
  //   if (this.click){
  //     this.click = false;
  //   }else{
  //     this.click = true;
  //     if(this.person.nationality.length != 0){
  //       this.forNationality = false;
  //     }else{
  //       this.forNationality = true;
  //     }
  //   }
  // }

  click = false;
  show(){
    if (this.click){
      this.click = false;
    }else{
      this.click = true;
    }
  }

  delete(){
    this.personInfo.emit(this.person);
    console.log(this.person);
  }

}
