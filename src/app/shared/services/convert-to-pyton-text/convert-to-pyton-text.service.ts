import { Injectable } from '@angular/core';
import { Command } from '../../types/command.model';

@Injectable({
  providedIn: 'root'
})
export class ConvertToPytonTextService {

  convert(commands:Command[]){
    const pythonImports ="import keyboard\nimport time"
    let commandLines = ""
    commands.forEach(value=>{
      let line = ""
      if(value.command === "time.sleep"){
        line = `${value.command}(${value.key})`
      }else{
        line = `${value.command}('${value.key}')`
      }
      commandLines = commandLines +'\n'+ line
    })
    return pythonImports + commandLines;
  }
}
