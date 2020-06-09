import { Component, OnInit } from '@angular/core';
import { windowToggle, window } from 'rxjs/operators';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent implements OnInit {
  panelOpenState: boolean = false;
  constructor() {}

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
    window.apply;
  }
  ngOnInit(): void {}
}
