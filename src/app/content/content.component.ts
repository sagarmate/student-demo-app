import { Component } from '@angular/core';
import { ConsoleService } from './../services/console-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  constructor(private consoleService: ConsoleService){

  }

  studentDataRecived(data: {name: string, no: number}) {
    this.consoleService.log(data.no + '-->' + data.name);
    this.consoleService.addStudent({name: data.name, no: data.no});
  }

}
