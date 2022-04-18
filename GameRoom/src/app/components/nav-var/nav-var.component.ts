import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../load-scripts.service';

@Component({
  selector: 'app-nav-var',
  templateUrl: './nav-var.component.html',
  styleUrls: ['./nav-var.component.css']
})
export class NavVarComponent implements OnInit {

  constructor(private _load_scripts: LoadScriptsService) {
    this._load_scripts.load_script_fullpath([
      "./assets/Nav/js_scripts/nav_scroll"
    ]);
  }

  ngOnInit(): void {
  }

}
