import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() selectedPage: EventEmitter<string> = new EventEmitter();


  pageSwitch(pageValue: string) {
    this.selectedPage.emit(pageValue);
  }

}
