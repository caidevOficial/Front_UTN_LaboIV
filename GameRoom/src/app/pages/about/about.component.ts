import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../load-scripts.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private _load_scripts: LoadScriptsService) { 
    this._load_scripts.load_script_fullpath([
      './assets/About/js_scripts/open_link'
    ]);
  }

  ngOnInit(): void {
  }

}
