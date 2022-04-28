import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../../load-scripts.service'

const backGrounds = [
  "./assets/Games/Dungeon/background/BG_01.png",
  "./assets/Games/Dungeon/background/BG_02.png",
  "./assets/Games/Dungeon/background/BG_03.png",
  "./assets/Games/Dungeon/background/BG_04.png",
  "./assets/Games/Dungeon/background/BG_05.png",
  "./assets/Games/Dungeon/background/BG_06.png",
  "./assets/Games/Dungeon/background/BG_07.png",
  "./assets/Games/Dungeon/background/BG_08.png",
  "./assets/Games/Dungeon/background/BG_09.png",
  "./assets/Games/Dungeon/background/BG_10.png",
  "./assets/Games/Dungeon/background/BG_11.png",
  "./assets/Games/Dungeon/background/BG_12.png",
  "./assets/Games/Dungeon/background/BG_13.png",
  "./assets/Games/Dungeon/background/BG_14.png",
  "./assets/Games/Dungeon/background/BG_15.png",
  "./assets/Games/Dungeon/background/BG_16.png",
  "./assets/Games/Dungeon/background/BG_17.png",
  "./assets/Games/Dungeon/background/BG_18.png"
]

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
      'Dungeon/js/common_vars',
      'module', true
    );
  }

  select_bg = (backs:string[]) => {
    let index = ~~(Math.random() * backs.length);
    this._load_scripts.append_background(backs[index], 'img-container');
  }

  load_main_script = () => {
    this._load_scripts.load_game_modules(
      'Dungeon/js/dungeon_game',
      'module', true
    );
  }

  ngOnInit(): void {
    this.select_bg(backGrounds);
    this.load_main_script();
  }
}
