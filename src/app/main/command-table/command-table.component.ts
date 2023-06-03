import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-command-table',
  standalone: true,
  imports: [CommonModule,DragDropModule],
  templateUrl: './command-table.component.html',
  styleUrls: ['./command-table.component.scss']
})
export class CommandTableComponent {

}
