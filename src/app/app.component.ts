import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Frontend Web 100 - Progressive ITU';

  changeTitle() {
    this.title = "Jeff Was Here!!"
  }
}
