import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  constructor(private route: Router) {}

  //  links: string[] = ['Notes', 'Reminders', 'Edit Lables', 'Archive', 'Tash'];
  // links: { [key: string]: string } = {
  //   Notes: '/notes',
  //   Reminders: '/Reminders',
  //   EditLables: '/lables',
  //   Archive: '/archive',
  //   Trash: '/trash',
  // };
  showInfo() {
    console.log();
  }
  // isMenuOpen = true;
  // contentMargin = 240;k
  ngOnInit(): void {}
  // onMenuToggle() {
  //   console.log('menu click', this.isManuOpen);
  //   this.isManuOpen = !this.isManuOpen;

  // // }
  // onToolbarMenuToggle() {
  //   console.log('On toolbar toggled', this.isMenuOpen);
  //   this.isMenuOpen = !this.isMenuOpen;

  //   if (!this.isMenuOpen) {
  //     this.contentMargin = 70;
  //   } else {
  //     this.contentMargin = 240;
  //   }
  // }
  signOut() {
    this.route.navigate(['/register']);
  }
}
