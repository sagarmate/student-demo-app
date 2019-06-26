import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  @Input() student: {name: string, no: number};

  constructor() { }

  ngOnInit() {
  }

}
