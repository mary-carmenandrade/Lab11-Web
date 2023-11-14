import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks: { name: string; completed: boolean }[] = [];
  filteredTasks: { name: string; completed: boolean }[] = [];
  selectedFilter: string = 'all';

  addTask(taskName: string) {
    const newTask = { name: taskName, completed: false };
    this.tasks.push(newTask);
    this.updateFilteredTasks();
  }
  
  onFilterChange(filter: string) {
    switch (filter) {
      case 'completed':
        this.filteredTasks = this.tasks.filter(task => task.completed);
        break;
      case 'not-completed':
        this.filteredTasks = this.tasks.filter(task => !task.completed);
        break;
      default:
        this.filteredTasks = this.tasks;
        break;
    }
  }

  private updateFilteredTasks() {
    const filter = this.selectedFilter || 'all';
    this.onFilterChange(filter);
  }
}
