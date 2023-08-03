import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public icon: string = "moon"

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme')

    if(theme){
      this.icon = "sun"
    } else {
      this.icon = "moon"
    }
  }
}
