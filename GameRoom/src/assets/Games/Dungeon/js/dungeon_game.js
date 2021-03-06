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
import { FPS, height_F, width_F, width_H, height_H, music_play, // music_bucket,
  scenary, _HERO_MSG_FORMAT, _BASIC_MSG_FORMAT } from './common_vars.js';
import { Hero } from './hero.js';

var canvas;
var ctx;
const KEY_UP = 87;
const KEY_DOWN = 83;
const KEY_LEFT = 65;
const KEY_RIGHT = 68;
const KEY_SPEAK = 69;


/**
 * Draws the background of the game
 * @param {HTMLImageElement} canvas_tileMap Is the image element of the canvas_tileMap [background of the game.] 
 */
const draw_scenary = (canvas_tileMap) => {
  for (var y = 0; y < 10; y++) {
    for (var x = 0; x < 15; x++) {
      const tile = scenary[y][x];
      ctx.drawImage(canvas_tileMap, tile * 32, 0, 32, 32,
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
 * @param {HTMLImageElement} hero_tileMap Is the image element of the hero.
 * @param {HTMLImageElement} enemy_tileMap Is the image element of the enemy.
 * @param {HTMLImageElement} canvas_tileMap Is the image element of the canvas_tileMap [background of the game.]
 * @param {HTMLImageElement} torch_img Is the image element of the torch.
 * @param {Hero} avatar Is the hero object.
 * @param {Enemy} enemy Is the enemy object.
 */
const principal = (hero_tileMap, enemy_tileMap, canvas_tileMap, torch_img, avatar, enemy) => {
  delete_canvas();
  draw_scenary(canvas_tileMap);
  torch_img.draw(ctx, canvas_tileMap, width_H, height_H);
  avatar.draw(ctx, hero_tileMap, width_H, height_H);

  enemy.forEach((e) => {
    e.move(avatar);
    e.draw(ctx, enemy_tileMap, width_F, height_F);
  });
}

/**
 * Make actions bassed on the key pressed.
 * @param {any} key_pressed Is the key pressed.
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
      if(avatar.Hero_Can_Move) {
      //  if(!music_bucket.hero_random_sound.playing()) {
      //   music_bucket.hero_random_sound.play();
      //  }
        avatar.hero_random_speak('hero_phrases/', avatar.Hero_Phrases);  
     }
     break;
    }
}

/**
 * Assigns a keycode to the button, bassed on its id.
 * then do the hero action.
 * @param {any} event Is the event of the button.
 */
const manual_buttons_event = (event) => {
  console.log(`inside manual_buttons_event\nevent: ${event}`);
  let key_pressed;
  
  if(event.target.className == 'btn') {
    switch (event.target.id) {
      case 'btn_up':
        key_pressed = { keyCode: KEY_UP };
        break;
      case 'btn_down':
        key_pressed = { keyCode: KEY_DOWN };
        break;
      case 'btn_left':
        key_pressed = { keyCode: KEY_LEFT };
        break;
      case 'btn_right':
        key_pressed = { keyCode: KEY_RIGHT };
        break;
      case 'btn_speak':
        key_pressed = { keyCode: KEY_SPEAK };
        break;
    }
    console.log(`key_pressed: ${key_pressed}`);
    Hero_Game_Action(key_pressed, avatar);
  }
}

/**
 * Adds a event listener to each button of the array.
 * @param {array} buttons Is the array of buttons to add the event listener.
 */
var add_event_each_button = (buttons) => {
  console.log(`inside add_event_each_button\nbuttons: ${buttons}`);
  buttons.forEach((btn) => {
    btn.addEventListener("clic", manual_buttons_event);
  });
}



/**
 * Initializes the game.
 */
const dungeon_game_init = () => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  //var buttons = document.querySelectorAll(".btn");
  
  
  var canvas_tileMap = new Image();
  canvas_tileMap.src = '../assets/Games/Dungeon/img/tilemap_dbz_namek.png';
  var hero_tile = new Image();
  hero_tile.src = '../assets/Games/Dungeon/img/tilemap_hero_t.png';
  var enemy_tile = new Image();
  enemy_tile.src = '../assets/Games/Dungeon/img/tilemap_enemy.png';

  //* Player
  const avatar = new Hero();
  //* Enemy
  const enemy = [];
  //* Create 4 enemies
  enemy.push(new Enemy(1, 8));
  enemy.push(new Enemy(7, 6));
  enemy.push(new Enemy(10, 8));
  enemy.push(new Enemy(12, 3));

  music_play();

  setTimeout( () => {
    avatar.first_game_position();
  }, 1000);

  //* Create the torch
  const torch_img = new Torch(0, 0);

  //* Keyboard events
  document.addEventListener('keydown', (key_pressed) => {
    Hero_Game_Action(key_pressed, avatar);
  });

  //* Buttons events
  //add_event_each_button(buttons);

  setInterval(() => {
    principal(hero_tile, enemy_tile, canvas_tileMap, torch_img, avatar, enemy);
  }, 1000 / FPS);
}


/**
 * Event listener for Load.
 */
 window.addEventListener("load", () => {
  console.log('%cStart Mision:', _BASIC_MSG_FORMAT);
  console.log('%cVegita: Frieza has 5 dragon balls, now i\'m going to search for the missing one!', _HERO_MSG_FORMAT);
  document.addEventListener('clic', manual_buttons_event(event));
  dungeon_game_init();
});

/**
 * Event listener for Close.
 */
window.addEventListener("close", () => {
  music.stop();
});
