import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  tytul: string;
  iloscstron: number;
  wydanie: Wydanie;
  tasks: string[];
  editMode = false;

  constructor() {
  }

  ngOnInit(): void {
    console.log('nginit');
    this.tytul = 'Harry Potter i kamień filozoficzny';
    this.iloscstron = 328;
    this.wydanie = {
      autor: 'J.K. Rowling',
      wydawnictwo: 'Media Rodzina',
      rok: 2016,
      miasto: 'Warszawa'
    };
    this.tasks = ['Tom 2', 'Tom 3'];
  }

  addTask(task): void {
    this.tasks.push(task);
  }

  deleteTask(task): void {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i] === task) {
        this.tasks.splice(i, 1);
      }
    }
  }

  changeEditMode(): void {
    this.editMode = !this.editMode;
  }
}

interface Wydanie {
  autor: string;
  wydawnictwo: string;
  rok: number;
  miasto: string;
}
