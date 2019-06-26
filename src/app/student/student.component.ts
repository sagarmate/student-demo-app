import { ConsoleService } from './../services/console-service.service';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent{

  no: number;
  name: string;
  showbtn: boolean = true;
  studentData: [{name: string, no: number}] = [{name: 'Sagar', no: 1}];

  @Output() private studentDataAdded = new EventEmitter<{name: string, no: number}>();

  constructor(private consoleService : ConsoleService){
    setTimeout(() => {this.showbtn = false;}, 3000);
  }

    btnclicked(){
      this.studentData.push({name: this.name, no: this.no});
      this.studentDataAdded.emit({name: this.name, no: this.no});

      this.consoleService.log('Event Emited from Studnet Component');

      this.no = '';
      this.name = '';
  }

  texteneter(event: any){
    console.log('-->'+event.target.value);
    this.name = event.target.value;
  }
}
