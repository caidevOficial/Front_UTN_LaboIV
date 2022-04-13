import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../load-scripts.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _load_scripts: LoadScriptsService) { 
    this._load_scripts.load_script_fullpath([
      './assets/Nav/js_scripts/nav_animation'
    ]);

    this._load_scripts.load_url_script([
      'https://kit.fontawesome.com/952007f668.js'
    ]);

    this._load_scripts.load_url_styles([
     'https://fonts.googleapis.com/css2?family=Cookie&display=swap',
     
    ])
   }

  ngOnInit(): void {
  }

}
