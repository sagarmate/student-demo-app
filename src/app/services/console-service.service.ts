import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {

  studentData: [{name: string, no: number}] = [{name: 'Sagar', no: 1}];

  constructor() { }

  log( msg: string ) {
    console.log('***Inside Console Service -->' + msg);
  }

  addStudent(student:{name: string, no: number}){
    this.studentData.push({name: student.name, no: student.no});
  }

}
