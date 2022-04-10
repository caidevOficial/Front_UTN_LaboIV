import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from '../../../../load-scripts.service';

@Component({
  selector: 'app-dcanva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.css']
})
export class CanvaComponent implements OnInit {

  constructor(private _load_scripts: LoadScriptsService) {
    this._load_scripts.load_game(['Dungeon/js/dungeon_game',
      'Dungeon/js/howler.core'
    ]);
  }


  ngOnInit(): void {

  }

}
