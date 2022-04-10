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

class Torch {
    x;
    y;
    delay;
    counter;
    frame;

    constructor(x, y) {
        this.Torch_x = x;
        this.Torch_y = y;
        this.Torch_delay = 10;
        this.Torch_counter = 0;
        this.Torch_frame = 0; //0-3
    }

    //* ######### Getters #########
    /**
     * Gets the torch X position.
     * 
     * @returns {number} The X position.
     */
    get Torch_x() {
        return this.x;
    }

    /**
     * Gets the torch Y position.
     * 
     * @returns {number} The new frame.
     */
    get Torch_y() {
        return this.y;
    }

    /**
     * Gets the torch delay.
     * 
     * @returns {number} The delay.
     */
    get Torch_delay() {
        return this.delay;
    }

    /**
     * Gets the torch counter.
     * 
     * @returns {number} The counter.
     */
    get Torch_counter() {
        return this.counter;
    }

    /**
     * Gets the Torch Frame.
     * 
     * @returns {number} The frame.
     */
    get Torch_frame() {
        return this.frame;
    }

    //* ######### Setters #########

    /**
     * Sets the torch X position.
     * @param {number} x - The new X position.
     */
    set Torch_x(x) {
        this.x = x;
    }

    /**
     * Sets the torch Y position.
     * @param {number} y - The new Y position.
     */
    set Torch_y(y) {
        this.y = y;
    }

    /**
     * Sets the torch delay.
     * @param {number} delay - The new delay.
     */
    set Torch_delay(delay) {
        this.delay = delay;
    }

    /**
     * Sets the torch counter.
     * @param {number} counter - The new counter.
     */
    set Torch_counter(counter) {
        this.counter = counter;
    }

    /**
     * Sets the torch frame.
     * @param {number} frame - The new frame.
     */
    set Torch_frame(frame) {
        this.frame = frame;
    }

    /**
     * Changes the torch frame.
     */
    change_frame = () => {
        if (this.Torch_frame < 3) {
            this.Torch_frame++;
        } else {
            this.Torch_frame = 0;
        }
    }

    /**
     * Draws the torch.
     */
    draw = (ctx, tileMap, width_F, height_F) => {
        if (this.Torch_counter < this.Torch_delay) {
            this.Torch_counter++;
        }
        else {
            this.Torch_counter = 0;
            this.change_frame();
        }

        ctx.drawImage(tileMap, this.Torch_frame * 32,
            64, 32, 32, width_F * this.Torch_x,
            height_F * this.Torch_y,
            width_F, height_F
        );
    }
}

export { Torch };