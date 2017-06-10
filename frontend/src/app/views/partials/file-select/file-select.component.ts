import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MediaService } from 'app/services/media.service';

@Component({
  selector: 'file-select',
  templateUrl: './file-select.component.html'
})
export class FileSelectComponent {
  @Input()
  label: String = 'Files';

  @Output('select')
  file: EventEmitter<any> = new EventEmitter();

  constructor(private mediaService: MediaService) {}

  onSelect(event) {
    for (let file of event.srcElement.files) {
      this.mediaService.getS3SignedURL(file).subscribe(
        url => {
          this.file.emit({ requestURL: url, file });
        }
      );
    }
  }
}
