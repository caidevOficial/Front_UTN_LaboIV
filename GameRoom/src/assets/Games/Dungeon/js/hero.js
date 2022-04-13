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

import { scenary, BALL, DOOR } from './common_vars.js';
import './howler.core.js'

class Hero {
    _x;
    _y;
    _KEY;
    _move_X = 0;
    _move_Y = 1;
    _is_alive = true;
    _hero_basic_sound = [
        'dball_found',
        'defeat',
        'error',
        'victory',
        'enemy_rage',
        'game_init'
    ];

    _hero_phrasings = [
        'balloon',
        'defeat_after_frieza',
        'demeaning',
        'dont_talkme',
        'ears',
        'heartless_sound',
        'idiot',
        'idiot_full',
        'if_i_train_harder',
        'insect',
        'power_is_all',
        'saiyajin_warrior',
        'this_fight_is_not',
        'what_did_u_said',
        'with_me'
    ];

    /**
     * Constructor for the hero.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     */
    constructor(x = 1, y = 1) {
        this.Hero_x = x;
        this.Hero_y = y;
    }

    //* ###### Properties: Getters ######

    /**
     * Gets the hero X position.
     * 
     * @returns {number} The X position.
     */
    get Hero_x() {
        return this._x;
    }

    /**
     * Gets the hero Y position.
     * 
     * @returns {number} The Y position.
     */
    get Hero_y() {
        return this._y;
    }

    /**
     * Gets the sprite of the hero [Axis X].
     * 
     * @returns {number} The sprite of the hero [Axis X].
     */
    get Hero_move_X() {
        return this._move_X;
    }

    /**
     * Gets the sprite of the hero [Axis Y].
     * 
     * @returns {number} The sprite of the hero [Axis Y].
     */
    get Hero_move_Y() {
        return this._move_Y;
    }

    /**
     * Gets True if the hero is on the same position as the key, otherwise False.
     * 
     * @returns {boolean} The key.
     */
    get Hero_KEY() {
        return this._KEY;
    }

    /**
     * Gets the list of sounds for the hero.
     */
    get Hero_Phrases() {
        return this._hero_phrasings;
    }

    /**
     * Gets the basic sound for the hero.
     */
    get Hero_Basic_Sounds() {
        return this._hero_basic_sound;
    }

    /**
     * Gets the status of the hero for 'Alive' or 'Dead'.
     */
    get Hero_Alive() {
        return this._is_alive;
    }

    //* ###### Properties: Setters ######

    /**
     * Sets the hero X position.
     * 
     * @param {number} value - The new X position.
     */
    set Hero_x(value) {
        this._x = value;
    }

    /**
     * Sets the hero Y position.
     * 
     * @param {number} value - The new Y position.
     */
    set Hero_y(value) {
        this._y = value;
    }

    /**
     * Sets the Axis X for the sprite animation.
     * 
     * @param {number} value - The new X position.
     */
    set Hero_move_X(value) {
        this._move_X = value;
    }

    /**
     * Sets the Axis Y for the sprite animation.
     * 
     * @param {number} value - The new Y position.
     */
    set Hero_move_Y(value) {
        this._move_Y = value;
    }

    /**
     * Sets True if the hero is on the same position as the key, otherwise False.
     * 
     * @param {boolean} key - The new key.
     */
    set Hero_KEY(value) {
        this._KEY = value;
    }

    /**
     * Sets the status of the hero for 'Alive' or 'Dead'.
     */
    set Hero_Alive(value) {
        this._is_alive = value;
    }

    /**
     * Draws the hero.
     */
    draw = (ctx, tileMap, width_H, height_H) => {
        ctx.drawImage(tileMap,
            this._move_X * 32,
            this._move_Y * 32,
            32, 32,
            this.Hero_x * width_H, this.Hero_y * height_H,
            width_H, height_H
        );
    }

    /**
     * If the hero is on the same position as the enemy, the hero dies.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     */
    enemy_collision = (x, y) => {
        if (this.Hero_x == x && this.Hero_y == y) {
            this.death();
        }
    }

    /**
     * Checks if the hero is on the margins of the map.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     * @returns {boolean} True if the hero is on the margins, otherwise False.
     */
    margins = (x, y) => {
        return scenary[y][x] == 0;
    }

    /**
     * Checks the movement of the sprite.
     */
    check_movement = () => {
        if (this.Hero_move_X < 3) {
            this.Hero_move_X++;
        } else {
            this.Hero_move_X = 0;
        }
    }

    /**
     * If the hero isn't on the margins, the hero moves up.
     */
    go_up = () => {
        if(this.Hero_Alive){
            if (!this.margins(this.Hero_x, this.Hero_y - 1)) {
                this.Hero_y--;
                this.Hero_move_Y = 0;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * If the hero isn't on the margins, the hero moves down.
     */
    go_down = () => {
        if(this.Hero_Alive){
            if (!this.margins(this.Hero_x, this.Hero_y + 1)) {
                this.Hero_y++;
                this.Hero_move_Y = 1;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * If the hero isn't on the margins, the hero moves left.
     */
    go_left = () => {
        if(this.Hero_Alive){
            if (!this.margins(this.Hero_x - 1, this.Hero_y)) {
                this.Hero_x--;
                this.Hero_move_Y = 2;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * If the hero isn't on the margins, the hero moves right.
     */
    go_rigth = () => {
        if(this.Hero_Alive){
            if (!this.margins(this.Hero_x + 1, this.Hero_y)) {
                this.Hero_x++;
                this.Hero_move_Y = 3;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * Sets the hero in the initial position.
     */
    set_default_position = () => {
        this.Hero_x = 1;
        this.Hero_y = 1;
        this.Hero_move_Y = 1;
        if(!this.Hero_Alive){
            this.Hero_Alive = true;
        }
        this.Hero_KEY = false;   // The player doesn't have the key.
        scenary[8][3] = 3;  // The key is in the initial position.
    }

    /**
     * Plays a victory sound and sets the hero in the initial position.
     */
    victory = () => {
        this.hero_speak(this.Hero_Basic_Sounds[3]);
        console.log('Vegeta: Finally i\'ll be immortal and the universe emperor!!');
        setTimeout(() => {
            console.log('Frieza: You\'ll pay, damn Saiyan!');
        }, 1000);
        this.set_default_position();
    }

    /**
     * Plays a death sound and sets the hero in the initial position.
     */
    death = () => {
        if(this.Hero_Alive){
            this.hero_speak(this.Hero_Basic_Sounds[1]);
            this.Hero_Alive = false;
            this.Hero_move_Y = 4; // Sprite death
            console.log('Vegeta: Avenge me, Kakarot!!!');
            setTimeout(() => {
                this.set_default_position();
            }, 7000);
        }
    }

    /**
     * Plays the initial phrase of the hero in the game.
     */
    hero_init_phrase = () => {
        this.hero_speak(this.Hero_Basic_Sounds[5]);
    }

    /**
     * Plays a specific sound of the player.
     * @param {string} phrase 
     */
    hero_speak = (phrase) => {
        if(this.Hero_Alive){
            let hero_speak = new Howl({
                src: [`../assets/Games/Dungeon/sound/${phrase}.ogg`],
                loop: false
            });
            hero_speak.play();
        }
    }

    /**
     * Plays a random sound of the player.
     */
    hero_random_speak = () => {
        let index = ~~(Math.random() * this.Hero_Phrases.length);
        this.hero_speak(`/phrases/${this.Hero_Phrases[index]}`);
    }

    /**
     * Basic game logic for the hero.
     */
    obj_logics = () => {
        var game_object = scenary[this.Hero_y][this.Hero_x];

        //? With the Dragon Ball
        if (game_object == BALL) {
            this.Hero_KEY = true;
            scenary[this.Hero_y][this.Hero_x] = 2;
            console.log('Vegeta: Finally i have the 1 Star Dragon Ball!!');
            setTimeout( () => {
                    this.hero_speak(this.Hero_Basic_Sounds[4]);
                    console.log("Frieza: Catch Vegeta, don't let him escape!!");
                }, 2600);
            this.hero_speak(this.Hero_Basic_Sounds[0]); // Catch the Dball
        }

        //? In the stairs
        if (game_object == DOOR) {
            if (this.Hero_KEY) {
                this.victory();
            } else {
                console.log('Vegeta: We can\'t leave this place without the Dragon Ball, insect!');
                this.hero_speak(this.Hero_Basic_Sounds[2]);
            }
        }
    }
}

export { Hero };
