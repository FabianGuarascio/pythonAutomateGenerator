import { Component } from '@angular/core';
import { CommandTableComponent } from './command-table/command-table.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [
    CommandTableComponent
  ]
})
export class MainComponent {

}
