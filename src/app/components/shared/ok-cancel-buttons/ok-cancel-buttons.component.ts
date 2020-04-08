import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-ok-cancel-buttons',
  templateUrl: './ok-cancel-buttons.component.html',
  styleUrls: ['./ok-cancel-buttons.component.css']
})
export class OkCancelButtonsComponent implements OnInit {

  @Output() public ok = new EventEmitter();
  @Output() public cancel = new EventEmitter();
  @Input() public okButtonText: string;

  constructor() { }

  ngOnInit() {
  }


}
