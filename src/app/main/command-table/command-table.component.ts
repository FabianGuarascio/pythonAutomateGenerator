import { Component, HostListener, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop'
import { FormsModule } from '@angular/forms';
import { Command, TypeOfCommand } from 'src/app/shared/types/command.model';
import {AlterKeys, alterKeys, commands, keyboardKeys} from "./commands";
import {MatChipsModule} from '@angular/material/chips';
import { DownloadFileService } from 'src/app/shared/services/download-file/download-file.service';
@Component({
  selector: 'app-command-table',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    CdkDropList,
    CdkDrag,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule
  ],
  templateUrl: './command-table.component.html',
  styleUrls: ['./command-table.component.scss']
})
export class CommandTableComponent {
  @ViewChild("doneList", { static: true }) doneList!: any;
  public commands: Command[] = commands
  public alterkeys = alterKeys
  public keyboardKeys = keyboardKeys
  public keyCombination = ''
  public time:number = 2
  public done:Command[] = [];
  public inputValue = ''
  private _converter = {
    Alt:'alt',
    Control:'ctrl',
    Tab:'tab',
    Meta:'win',
    Shift:'shift',
    Escape:'escape',
    ' ':'space'
  }
  private _downLoadService = inject(DownloadFileService)

  addToKeyCombination(key:string){
    if(this.keyCombination.length === 0){
      this.keyCombination = key
    }else{
      this.keyCombination += `+${key}`
    }
  }

  clear(){
    this.done = []
  }

  drop(event: CdkDragDrop<Command[]>) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

  deleteItem(index:number){
    this.done.splice(index, 1);
  }

  pushToArray(fromInput:TypeOfCommand){
    if(fromInput === 'write'){
      if (this.inputValue) {
        this.done.push({command:"keyboard.write",key:this.inputValue});
        this.inputValue = '';
      }
    } else if(fromInput === 'pressAndRelease'){
      if(this.keyCombination){
        this.done.push({command:"keyboard.press_and_release",key:this.keyCombination});
        this.keyCombination = '';
      }
    } else {
      this.done.push({command:"time.sleep", key: String(this.time)});
    }
  }


  downloadFile() {
    this._downLoadService.downloadFile(this.done)
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if(event.target instanceof HTMLInputElement) return;
    const key = event.key as keyof typeof this._converter
    if(event.key === 'Enter'){
      event.preventDefault();
      this.pushToArray('pressAndRelease')
    }else if(this._converter[key] !== undefined){
      event.preventDefault();
      this.addToKeyCombination(this._converter[key])
    }else{
      this.addToKeyCombination(event.key)
    }
  }
}
