/**
 * MIT License
 *
 * Copyright (C) 2021 <FacuFalcone - CaidevOficial>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * You should have received a copy of the MIT license
 * along with this program.  If not, see <https://opensource.org/licenses/MIT>.
 *
 * @author Facundo Falcone <CaidevOficial> 
 */

import { Enemy } from './enemy.js';
import { Torch } from './torch.js';
import { FPS, height_F, width_F, width_H, height_H, music, scenary } from './common_vars.js';
import { Hero } from './hero.js';

var canvas;
var ctx;
const KEY_UP = 87;
const KEY_DOWN = 83;
const KEY_LEFT = 65;
const KEY_RIGHT = 68;

const draw_scenary = (tileMap) => {
  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 15; x++) {
      const tile = scenary[y][x];
      ctx.drawImage(tileMap, tile * 32, 0, 32, 32,
        width_F * x, height_F * y,
        width_F, height_F
      );
    }
  }
}

const dungeon_game_init = () => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  
  var tileMap = new Image();
  tileMap.src = '../assets/Games/Dungeon/img/tilemap_dbz.png';
  var hero_tile = new Image();
  hero_tile.src = '../assets/Games/Dungeon/img/tilemap_hero.png';

  music.play();

  const enemy = [];
  //* Create 4 enemies
  enemy.push(new Enemy(3, 3));
  enemy.push(new Enemy(5, 7));
  enemy.push(new Enemy(7, 7));
  enemy.push(new Enemy(9, 7));

  //* Player
  const avatar = new Hero();

  //* Create the torch
  const torch_img = new Torch(0, 0);

  //* Keyboard events
  document.addEventListener('keydown', (key_pressed) => {
    switch (key_pressed.keyCode) {
      case KEY_UP:
        avatar.go_up();
        break;
      case KEY_DOWN:
        avatar.go_down();
        break;
      case KEY_LEFT:
        avatar.go_left();
        break;
      case KEY_RIGHT:
        avatar.go_rigth();
        break;
    }

  });

  setInterval(function () {
    principal(hero_tile, tileMap, torch_img, avatar, enemy);
  }, 1000 / FPS);
}

const delete_canvas = () => {
  canvas.width = 750;
  canvas.height = 500;
}

const principal = (hero_tile, tileMap, torch_img, avatar, enemy) => {
  delete_canvas();
  draw_scenary(tileMap);
  torch_img.draw(ctx, tileMap, width_F, height_F);
  avatar.draw(ctx, hero_tile, width_H, height_H);


  enemy.forEach((e) => {
    e.move(avatar);
    e.draw(ctx, tileMap, width_F, height_F);
  });
}

/**
 * Event listener for Load.
 */
 window.addEventListener("load", () => {
  console.log('Inside Dungeon Game');
  dungeon_game_init();
});
