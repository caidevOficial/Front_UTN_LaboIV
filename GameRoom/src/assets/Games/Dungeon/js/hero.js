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

import { scenary, BALL, DOOR, 
    speak,
    sleep,
    _hero_basic_sound, 
    _hero_defeat_sound, 
    _hero_phrasings,
    _enemy_init_phrase,
    _enemy_provoke,
    _enemy_rage,
    _enemy_defeat_hero_phrasing,
    _HERO_MSG_FORMAT,
    _SUPER_HERO_MSG_FORMAT,
    _VILLAIN_MSG_FORMAT, 
    UP_DIR, DOWN_DIR, 
    LEFT_DIR, RIGHT_DIR  } from './common_vars.js';
import './howler.core.js'

class Hero {
    _x;
    _y;
    _KEY;
    _move_X;
    _move_Y;
    _is_alive;
    _can_move;
    _is_SSJ;
    

    /**
     * Constructor for the hero.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     */
    constructor(x = 1, y = 1) {
        this.Hero_x = x;
        this.Hero_y = y;
        this.Hero_Alive = true;
        this.Hero_Can_Move = false;
        this.Hero_move_X = 0;
        this.Hero_move_Y = 5;
        this.Hero_Is_SSJ = false;
    }

    //* ###### Properties: Getters ######

    /**
     * Gets the hero X position.
     * @returns {number} The X position.
     */
    get Hero_x() {
        return this._x;
    }

    /**
     * Gets the hero Y position.
     * @returns {number} The Y position.
     */
    get Hero_y() {
        return this._y;
    }

    /**
     * Gets the sprite of the hero [Axis X].
     * @returns {number} The sprite of the hero [Axis X].
     */
    get Hero_move_X() {
        return this._move_X;
    }

    /**
     * Gets the sprite of the hero [Axis Y].
     * @returns {number} The sprite of the hero [Axis Y].
     */
    get Hero_move_Y() {
        return this._move_Y;
    }

    /**
     * Gets the status if the hero can make a move.
     * @returns {boolean} True if the hero can make a move.
     */
    get Hero_Can_Move(){
        return this._can_move;
    }

    /**
     * Gets True if the hero is on the same position as the key, otherwise False.
     * @returns {boolean} The key.
     */
    get Hero_KEY() {
        return this._KEY;
    }

    /**
     * Gets the list of sounds for the hero.
     * @returns {Array} The list of sounds for the hero.
     */
    get Hero_Phrases() {
        return _hero_phrasings;
    }

    /**
     * Gets the list for basic sound for the hero.
     * @returns {Array} The basic sound for the hero.
     */
    get Hero_Basic_Sounds() {
        return _hero_basic_sound;
    }

    /**
     * Gets the list for hero defeat sound.
     */
    get Hero_Defeat_Sound(){
        return _hero_defeat_sound;
    }

    /**
     * Gets the status of the hero for 'Alive' or 'Dead'.
     * @returns {boolean} True if the hero is alive.
     */
    get Hero_Alive() {
        return this._is_alive;
    }

    /**
     * Gets the color format of the Hero's message.
     * @returns {string} The color format of the Hero's message as a base format.
     */
    get Hero_MSG_Format() {
        return _HERO_MSG_FORMAT;
    }

    /**
     * Gets the color format of the Hero's message while it's super.
     * @returns {string} The color format of the Hero's message as a super format.
     */
    get Hero_SMSG_Format(){
        return _SUPER_HERO_MSG_FORMAT;
    }

    /**
     * Gets the color format of the villains' message.
     * @returns {string} The color format of the villains' message as a base format.
     */
    get Villain_MSG_Format() {
        return _VILLAIN_MSG_FORMAT;
    }

    /**
     * Gets true if the hero is tranformed, otherwise false.
     * @returns {boolean} True if the hero is tranformed.
     */
    get Hero_Is_SSJ(){
        return this._is_SSJ;
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
     * @param {number} value - The new X position.
     */
    set Hero_move_X(value) {
        this._move_X = value;
    }

    /**
     * Sets the Axis Y for the sprite animation.
     * @param {number} value - The new Y position.
     */
    set Hero_move_Y(value) {
        this._move_Y = value;
    }

    /**
     * Sets the status if the hero can make a move.
     * @param {boolean} value - The new status.
     */
    set Hero_Can_Move(value){
        this._can_move = value;
    }

    /**
     * Sets True if the hero is on the same position as the key, otherwise False.
     * @param {boolean} key - The new key.
     */
    set Hero_KEY(value) {
        this._KEY = value;
    }

    /**
     * Sets the status of the hero for 'Alive' or 'Dead'.
     * @param {boolean} value - The new status.
     */
    set Hero_Alive(value) {
        this._is_alive = value;
    }

    /**
     * Sets the status in true if the hero is transformed, otherwise false.
     * @param {boolean} value - The new status.
     */
    set Hero_Is_SSJ(value){
        this._is_SSJ = value;
    }

    //* ###### Draw Methods ######

    /**
     * Draws the hero.
     * @param {CanvasRenderingContext2D} ctx - The canvas context.
     * @param {HTMLImageElement} tileMap - The X position.
     * @param {number} width_H - The width max of the cell where the hero is.
     * @param {number} height_H - The height max of the cell where the hero is.
     * 
     */
    draw = (ctx, tileMap, width_H, height_H) => {
        ctx.drawImage(tileMap,
            this.Hero_move_X * 32,
            this.Hero_move_Y * 32,
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

    //* ###### Check Methods ######

    /**
     * Checks the movement of the sprite.
     */
    check_movement = () => {
        (this.Hero_Can_Move && this.Hero_move_X < 3) ?
            this.Hero_move_X++ :
            this.Hero_move_X = 0;
    }

    //* ###### Move Methods ######

    /**
     * If the hero is alive & isn't on the margins, the hero moves up.
     */
    go_up = () => {
        if(this.Hero_Alive && this.Hero_Can_Move){
            if (!this.margins(this.Hero_x, this.Hero_y - 1)) {
                this.Hero_y--;
                this.Hero_move_Y = UP_DIR;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * If the hero is alive & isn't on the margins, the hero moves down.
     */
    go_down = () => {
        if(this.Hero_Alive && this.Hero_Can_Move){
            if (!this.margins(this.Hero_x, this.Hero_y + 1)) {
                this.Hero_y++;
                this.Hero_move_Y = DOWN_DIR;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * If the hero is alive & isn't on the margins, the hero moves left.
     */
    go_left = () => {
        if(this.Hero_Alive && this.Hero_Can_Move){
            if (!this.margins(this.Hero_x - 1, this.Hero_y)) {
                this.Hero_x--;
                this.Hero_move_Y =LEFT_DIR;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * If the hero is alive & isn't on the margins, the hero moves right.
     */
    go_rigth = () => {
        if(this.Hero_Alive && this.Hero_Can_Move){
            if (!this.margins(this.Hero_x + 1, this.Hero_y)) {
                this.Hero_x++;
                this.Hero_move_Y = RIGHT_DIR;
                this.check_movement();
                this.obj_logics();
            }
        }
    }

    /**
     * Sets the hero in the initial position.
     */
     first_game_position = () => {
        this.revive();
        let transform = setTimeout(() => {
            let position = setTimeout(() => {
                let phrase = setTimeout(() => {
                    this.hero_random_speak('enemy_phrases/', _enemy_init_phrase);
                    console.log('%cFrieza: I regret to inform you that after tearing you to pieces,\nI plan to completely destroy the earth and along with it the namek dragon balls!', this.Villain_MSG_Format);
                    clearTimeout(transform);
                    clearTimeout(position);
                    clearTimeout(phrase);
                }, 2000);
                this.Hero_move_Y = 1;
                this.Hero_move_X = 0;
                this.Hero_Can_Move = true;
                this.go_down();
            }, 3040);
            this.transform_animation();
        }, 6800);
        this.hero_init_phrase(); // init wait 6.9 sec
        this.Hero_KEY = false;   // The player doesn't have the key.
        scenary[8][3] = 3;  // The key is in the initial position.
    }

    set_base_idle = () => {
        this.Hero_move_Y = 5;
        this.Hero_move_X = 0;
    }

    /**
     * Sets the hero in the initial position.
     */
    set_default_position = () => {
        this.revive();
        let position = setTimeout(() => {
            this.Hero_Can_Move = true;
            clearTimeout(position);
        }, 3050);
        this.transform_animation();
        this.Hero_KEY = false;   // The player doesn't have the key.
        scenary[8][3] = 3;  // The key is in the initial position.
    }

    //* ###### Actions Methods ######
    /**
     * Sets the hero the status Alive in true and Can_Move in false.
     */
    revive = () => {
        if(!this.Hero_Alive){
            this.Hero_Alive = true;
            this.Hero_Is_SSJ = false;
            this.Hero_Can_Move = false;
        }
        this.set_base_idle();
        this.Hero_x = 1;
        this.Hero_y = 1;    
    }

    /**
     * Plays a victory sound and sets the hero in the initial position.
     */
     victory = () => {
         this.hero_random_speak('enemy_phrases/', _enemy_rage);
         console.log('%cSuper Vegita: Finally i\'ll be immortal and the universe emperor!!', this.Hero_SMSG_Format);
         this.Hero_Can_Move = false;
         setTimeout(() => {
             setTimeout(() => {
                this.Hero_Is_SSJ = false;
                this.set_default_position();
            }, 6400);
            console.log('%cFrieza: You\'ll pay, damn Saiyan!', this.Villain_MSG_Format);
        }, 1000);
        
    }

    /**
     * Plays a death sound and sets the hero in the initial position.
     */
    death = () => {
        if(this.Hero_Alive){
            this.hero_random_speak('', this.Hero_Defeat_Sound);
            this.Hero_Alive = false;
            this.Hero_Can_Move = false;
            this.Hero_move_Y = 4; // Sprite death
            console.log('%cVegita: Avenge me, Kakarot!!!', this.Hero_MSG_Format);
            setTimeout(() => {
                this.set_default_position();
            }, 7000);
        }
    }

    //* ###### Animation Methods ######

    /**
     * Makes a partial animation for the transformation of the hero.
     * @param {number} index_Y 
     */
    transform_Y = (index_Y) => {
        this.Hero_move_X = 0;
        this.Hero_move_Y = index_Y;
        //console.log(`Index Y: ${index_Y} | Index X: ${this.Hero_move_X}`);
        let interval = setInterval(() => {
            if (this.Hero_Alive && this.Hero_move_X < 3) {
                this.Hero_move_X++;
            }
            //console.log(`Index Y: ${index_Y} | Index X: ${this.Hero_move_X}`);
            if (this.Hero_move_X == 3) {
                clearInterval(interval);
            }
        }, 250);
        
    }

    /**
     * Makes a full animation for the transformation of the hero, also plays a sound
     * for the transformation and prints a message in console.
     */
    transform_animation = () => {
        if(!this.Hero_Is_SSJ){
            let tran_1 = setTimeout(() => {
                console.log("%cSuper Vegita: I\'m Super Vegita!!!", this.Hero_SMSG_Format);
                this.transform_Y(5);
                let tran_2 = setTimeout(() => {
                    this.transform_Y(6);
                    let tran_3 = setTimeout(() => {
                        this.transform_Y(7);
                        let tran_4 = setTimeout(() => {
                            this.Hero_move_X = 0;
                            this.Hero_move_Y = 1;
                            this.Hero_Is_SSJ = true;
                            clearTimeout(tran_1);
                            clearTimeout(tran_2);
                            clearTimeout(tran_3);
                            clearTimeout(tran_4);
                        }, 1010);
                    }, 1010);
                } , 1010);
            }, 250);
            this.hero_speak(this.Hero_Basic_Sounds[6]); // scream wait 4 sec
        }
    }

    //* ###### Speech Methods ######

    /**
     * Gets randomly the name of the audio file for the hero defeat.
     * @returns {string} The name of the audio file randomly.
     */
     random_defeat_sound = () => {
        return random_sound_from_list(this.Hero_Defeat_Sound);
    }

    /**
     * Selects randomly a sound from the list of sounds for the hero.
     * @param {list} list List to search randomly a name of the audio file.
     * @returns {string} The name of the selected audio file.
     */
    random_sound_from_list = (list) => {
        let index = Math.floor(Math.random() * list.length);
        return list[index];
    }

    /**
     * Plays the initial phrase of the hero in the game.
     */
    hero_init_phrase = () => {
        this.hero_speak(this.Hero_Basic_Sounds[5]);
    }

    /**
     * Plays a random sound of the player from a list of sounds.
     * @param {list} list List of audio files to be played randomly.
     */
    hero_random_speak = (directory = '', sound_list) => {
        let phrase = this.random_sound_from_list(sound_list);
        this.hero_speak(`${directory}${phrase}`);
    }

    /**
     * Plays a specific sound of the player.
     * @param {string} phrase The name of the audio to be played.
     */
    hero_speak = (phrase) => {
        if(this.Hero_Alive){
            speak(`${phrase}`);
        }
    }

    //* ###### Key Methods ######

    /**
     * Basic game logic for the hero.
     */
    obj_logics = () => {
        var game_object = scenary[this.Hero_y][this.Hero_x];

        //? With the Dragon Ball
        if (game_object == BALL) {
            this.Hero_KEY = true;
            scenary[this.Hero_y][this.Hero_x] = 2;
            console.log('%cSuper Vegita: Finally i have the 1 Star Dragon Ball!!', this.Hero_SMSG_Format);
            setTimeout( () => {
                    this.hero_speak(this.Hero_Basic_Sounds[3]);
                    console.log("%cFrieza: Catch Vegita, don't let him escape!!", this.Villain_MSG_Format);
                }, 3150);
                this.hero_speak(this.Hero_Basic_Sounds[0]); // Catch the Dball
        }

        //? In the stairs
        if (game_object == DOOR) {
            if (this.Hero_KEY) {
                this.victory();
            } else {
                console.log('%cSuper Vegita: We can\'t leave this place without the Dragon Ball, insect!', this.Hero_SMSG_Format);
                this.hero_speak(this.Hero_Basic_Sounds[1]);
            }
        }
    }
}

export { Hero };
