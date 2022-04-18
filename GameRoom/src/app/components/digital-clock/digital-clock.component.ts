import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../load-scripts.service';

@Component({
  selector: 'app-digital-clock',
  templateUrl: './digital-clock.component.html',
  styleUrls: ['./digital-clock.component.css']
})
export class DigitalClockComponent implements OnInit {

  constructor(private _load_scripts: LoadScriptsService) { 
    this._load_scripts.load_script_fullpath([
      './assets/Time/js_scripts/digital_clock'
    ]);
  }

  ngOnInit(): void {
  }

}
