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
import { FPS, height_F, width_F, width_H, height_H, music_play, scenary } from './common_vars.js';
import { Hero } from './hero.js';

var canvas;
var ctx;
const KEY_UP = 87;
const KEY_DOWN = 83;
const KEY_LEFT = 65;
const KEY_RIGHT = 68;
const KEY_SPEAK = 69;
const HERO_MSG_FORMAT = 'color: #FFF; background-color: blue; font-size: 10px; border: 2px solid white; border-radius: 10px; pading: 5px 10px;';

/**
 * Draws the background of the game
 * @param {HTMLImageElement} tileMap Is the image element of the tilemap [background of the game.] 
 */
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

/**
 * Creates a new canvas element and deletes the old one.
 */
const delete_canvas = () => {
  canvas.width = 750;
  canvas.height = 500;
}

/**
 * Draws the background, the hero, the enemies and the torch.
 * @param {HTMLImageElement} hero_tile Is the image element of the hero.
 * @param {HTMLImageElement} tileMap Is the image element of the tilemap [background of the game.]
 * @param {HTMLImageElement} torch_img Is the image element of the torch.
 * @param {Hero} avatar Is the hero object.
 * @param {Enemy} enemy Is the enemy object.
 */
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
 * Make actions bassed on the key pressed.
 * @param {KeyboardEvent} key_pressed Is the key pressed.
 * @param {Hero} avatar Is the hero object.
 */
const Hero_Game_Action = (key_pressed, avatar) => {
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
    case KEY_SPEAK:
      avatar.hero_random_speak();
  }
}

/**
 * Initializes the game.
 */
const dungeon_game_init = () => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  
  var tileMap = new Image();
  tileMap.src = '../assets/Games/Dungeon/img/tilemap_dbz_namek.png';
  var hero_tile = new Image();
  hero_tile.src = '../assets/Games/Dungeon/img/tilemap_hero.png';

  //* Player
  const avatar = new Hero();
  //* Enemy
  const enemy = [];
  //* Create 4 enemies
  enemy.push(new Enemy(3, 3));
  enemy.push(new Enemy(5, 7));
  enemy.push(new Enemy(7, 7));
  enemy.push(new Enemy(9, 7));

  music_play();
  setTimeout( () => {
    avatar.hero_init_phrase();
  }, 1000);

  //* Create the torch
  const torch_img = new Torch(0, 0);

  //* Keyboard events
  document.addEventListener('keydown', (key_pressed) => {
    Hero_Game_Action(key_pressed, avatar);
  });

  setInterval(() => {
    principal(hero_tile, tileMap, torch_img, avatar, enemy);
  }, 1000 / FPS);
}

/**
 * Event listener for Load.
 */
 window.addEventListener("load", () => {
  console.log('%cStart Mision:\nVegeta: Frieza has 5 dragon balls, now i\'m going to search for the missing one!', HERO_MSG_FORMAT);
  dungeon_game_init();
});

/**
 * Event listener for Close.
 */
window.addEventListener("close", () => {
  music.stop();
});
