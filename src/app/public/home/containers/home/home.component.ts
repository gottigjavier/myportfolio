import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tasks = [];

  constructor(
    private taskService: TaskService
    ) { }

    ngOnInit(): void {
      this.taskService.getTasks().subscribe( (tasks) => {
        this.tasks = tasks
      });
    }

}
