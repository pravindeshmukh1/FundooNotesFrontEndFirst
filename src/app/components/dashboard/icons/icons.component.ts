import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss'],
})
export class IconsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  colorCode: Array<any> = [
    { code: '#FFFFFF', name: 'White' },
    { code: '#F28B82', name: 'Red' },
    { code: '#F7BC04', name: 'Orange' },
    { code: '#FCF474', name: 'Yellow' },
    { code: '#b7f8dd', name: 'Green' },
    { code: '#A7FFEB', name: 'Teal' },
    { code: '#CBF0F8', name: 'Blue' },
    { code: '#AECBFA', name: 'Dark Blue' },
    { code: '#800080', name: 'Lime' },
    { code: '#FF99FF', name: 'Purple' },
    { code: '##D3D3D3', name: 'Gray' },
    { code: '#FFCC99', name: 'Brown' },
    { code: '#FFB6C1', name: 'Pink' },
  ]
  setColor(color: any) {}
}
