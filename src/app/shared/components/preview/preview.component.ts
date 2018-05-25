import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})

export class PreviewComponent {

  @Input() public focusedItem: any;
  @Input() public type: any;

  constructor() {  }

}
