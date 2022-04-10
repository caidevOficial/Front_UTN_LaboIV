import { Component } from '@angular/core';
import { LoadScriptsService } from './load-scripts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _title = 'GameRoom';

  /**
   * Main constructor of the AppComponent that imports the firebase services.
   */
   constructor(private _load_scripts: LoadScriptsService) {
    this._load_scripts.load_url_script([
      'https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js',
      'https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js'
    ]);
  }

  /**
   * Gets the title of the AppComponent.
   * @returns {string} The title of the AppComponent.
   */
  get Title(): string {
    return this._title;
  }

  /**
   * Sets the title of the AppComponent.
   * @param {string} value The title of the AppComponent.
   */
  set Title(value: string) {
    this._title = value;
  }
}
