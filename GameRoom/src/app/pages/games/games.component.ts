import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../load-scripts.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(private _load_scripts: LoadScriptsService) {
    this._load_scripts.load_assets_script(['Games/js/filtro',
      'Games/js/jquery'
    ]);
   }

  ngOnInit(): void {
  }

}
