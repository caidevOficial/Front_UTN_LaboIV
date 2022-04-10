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

import { scenary } from './common_vars.js';

class Enemy {

    _x;
    _y;
    _direction;
    _delay;
    _frame;
    _counter;

    /**
     * Constructor for the enemy.
     * @param {number} x - The X position.
     * @param {number} y - The Y position.
     */
    constructor(x, y) {
        this.Enemy_x = x;
        this.Enemy_y = y;
        this.Enemy_direction = Math.floor(Math.random() * 4);
        this.Enemy_delay = 50;
        this.Enemy_frame = 0;
        this.Enemy_counter = 0;
    }

    //* ######### Getters #########
    /**
     * Gets the enemy X position.
     */
    get Enemy_x() {
        return this._x;
    }

    /**
     * Gets the enemy Y position.
     */
    get Enemy_y() {
        return this._y;
    }

    /**
     * Gets the enemy movement direction.
     */
    get Enemy_direction() {
        return this._direction;
    }

    /**
     * Gets the enemy delay
     */
    get Enemy_delay() {
        return this._delay;
    }

    /**
     * Gets the enemy frames.
     */
    get Enemy_frame() {
        return this._frame;
    }

    /**
     * Gets the enemy counter.
     */
    get Enemy_counter() {
        return this._counter;
    }

    //* ######### Setters #########

    /**
     * Sets the enemy X position.
     * @param {number} x - The new X position.
     */
    set Enemy_x(x) {
        this._x = x;
    }

    /**
     * Sets the enemy Y position.
     * @param {number} y - The new Y position.
     */
    set Enemy_y(y) {
        this._y = y;
    }

    /**
     * Sets the enemy movement direction.
     * @param {number} direction - The new direction.
     */
    set Enemy_direction(direction) {
        this._direction = direction;
    }

    /**
     * Sets the enemy delay.
     * @param {number} delay - The new delay.
     */
    set Enemy_delay(delay) {
        this._delay = delay;
    }

    /**
     * Sets the enemy frames.
     * @param {number} frame - The new frames.
     */
    set Enemy_frame(frame) {
        this._frame = frame;
    }

    /**
     * Sets the enemy counter.
     * @param {number} counter - The new counter.
     */
    set Enemy_counter(counter) {
        this._counter = counter;
    }

    draw = (ctx, tileMap, width_F, height_F) => {
        ctx.drawImage(tileMap, 0, 32, 32, 32,
            this.Enemy_x * width_F, this.Enemy_y * height_F,
            width_F, height_F
        );
    }

    /**
     * Checks if the enemy is in the same position as the player.
     * @param {number} x - The X position of the player.
     * @param {number} y - The Y position of the player.
     * @returns {boolean} - Returns true if the enemy collides with the player.
     */
    check_collision = (x, y) => {
        return scenary[y][x] == 0;
    }

    /**
     * Moves the enemy.
     */
    move = (avatar) => {

        avatar.enemy_collision(this.Enemy_x, this.Enemy_y);

        if (this.Enemy_counter < this.Enemy_delay) {
            this.Enemy_counter++;
        } else {
            this.Enemy_counter = 0;

            //* ######## UP ########
            if (this.Enemy_direction == 0) {
                if (!this.check_collision(this.Enemy_x, this.Enemy_y - 1)) {
                    this.Enemy_y--;
                }
                else {
                    this.Enemy_direction = Math.floor(Math.random() * 4);
                }
            }


            //* ######## DOWN ########
            else if (this.Enemy_direction == 1) {
                if (!this.check_collision(this.Enemy_x, this.Enemy_y + 1)) {
                    this.Enemy_y++;
                }
                else {
                    this.Enemy_direction = Math.floor(Math.random() * 4);
                }
            }

            //* ######## LEFT ########
            else if (this.Enemy_direction == 2) {
                if (!this.check_collision(this.Enemy_x - 1, this.Enemy_y)) {
                    this.Enemy_x--;
                }
                else {
                    this.Enemy_direction = Math.floor(Math.random() * 4);
                }
            }

            //* ######## RIGHT ########
            else if (this.Enemy_direction == 3) {
                if (!this.check_collision(this.Enemy_x + 1, this.Enemy_y)) {
                    this.Enemy_x++;
                }
                else {
                    this.Enemy_direction = Math.floor(Math.random() * 4);
                }
            }
        }
    }
}

export { Enemy };