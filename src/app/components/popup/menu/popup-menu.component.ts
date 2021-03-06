import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Field} from '../../../models/Field';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.pug',
  styleUrls: ['./popup-menu.component.sass']
})
export class PopupMenuComponent implements OnInit {
  @ViewChild('menu') menuButton;
  @Input() fields: Field[];
  @Input() visible: boolean;

  ngOnInit(): void {
    this.visible = false;
  }
}
