import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentrecord',
  templateUrl: './studentrecord.component.html',
  styleUrls: ['./studentrecord.component.css']
})
export class StudentrecordComponent implements OnInit {

  rollNo: number;
  fname: string;
  lname: string;

  studentDB: [{rollNo: number, fname: string, lname: string}] = [];

  constructor() { }

  ngOnInit() {
  }

  addStudent(){

    this.studentDB.push([{
      rollNo: this.rollNo,
      fname: this.fname,
      lname: this.lname
    }]);

    console.log(this.studentDB);
  }

  clearData(){
    this.rollNo = '';
    this.fname = '';
    this.lname = '';
  }

}
