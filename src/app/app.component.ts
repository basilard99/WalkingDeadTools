import { Component } from '@angular/core';
import { FactionNameType } from './faction-name-type/faction-name-type'

var test = new FactionNameType('howdy');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent {
};

export { AppComponent };
