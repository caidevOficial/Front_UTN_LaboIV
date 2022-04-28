import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../load-scripts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor(private _load_scripts: LoadScriptsService) {
  //   this._load_scripts.load_assets_script(['Games/js/filtro',
  //     'Games/js/jquery'
  //   ]);
  //  }

   constructor() {}

  ngOnInit(): void {
  }

}
