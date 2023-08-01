import { Injectable, inject } from '@angular/core';
import { ConvertToPytonTextService } from '../convert-to-pyton-text/convert-to-pyton-text.service';
import { Command } from '../../types/command.model';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileService {

  #_convertToPythonText = inject(ConvertToPytonTextService)

  downloadFile(done:Command[]) {
    const pythonCode = this.#_convertToPythonText.convert(done);
    const blob = new Blob([pythonCode], { type: 'text/x-python' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'user_file.py';
    link.click();
  }
}
