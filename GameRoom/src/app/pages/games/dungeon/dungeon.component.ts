import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../../load-scripts.service'

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css']
})
export class DungeonComponent implements OnInit {

  constructor(private _load_scripts: LoadScriptsService) {
    this._load_scripts.load_game([
      'Dungeon/js/howler.core'
    ]);

    this._load_scripts.load_game_modules(
      'Dungeon/js/dungeon_game',
      'module', true
    );

    this._load_scripts.load_game_modules(
      'Dungeon/js/common_vars',
      'module', true
    );
  }

  ngOnInit(): void {
  }

}
