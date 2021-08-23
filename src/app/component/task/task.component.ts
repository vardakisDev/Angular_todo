import { Component, OnInit, Input } from '@angular/core';
import { ITask } from 'src/models/Task';
import { faTimes, IconDefinition } from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!: ITask;

  faTimes: IconDefinition = faTimes;


  constructor() { }

  ngOnInit(): void {
  }

}
