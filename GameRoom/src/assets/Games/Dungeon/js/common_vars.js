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

import './howler.core.js'

const FPS = 55;
const width_F = 50;
const height_F = 50;
const width_H = 50;
const height_H = 50;
const WALL = 0;
const LAND = 2;
const DOOR = 1;
const BALL = 3;

const music_themes = [
    "battle_theme",
    "vegeta_theme"
];

/**
 * Plays a random music theme from the music_themes array.
 */
const music_play = () => {
    let index = ~~(Math.random() * music_themes.length);
    const music = new Howl({
        src: [`../assets/Games/Dungeon/music/${music_themes[index]}.ogg`],
        loop: true
    });
    music.volume(0.5);
    music.play();
}

/**
 * Array of the game's map for Walls, the Door, the object and the Land.
 */
var scenary = [
    [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL],
    [WALL, LAND, LAND, WALL, WALL, WALL, LAND, LAND, LAND, LAND, WALL, WALL, LAND, LAND, WALL],
    [WALL, WALL, LAND, LAND, LAND, LAND, LAND, WALL, WALL, LAND, WALL, WALL, LAND, WALL, WALL],
    [WALL, WALL, LAND, WALL, WALL, WALL, LAND, LAND, WALL, LAND, LAND, LAND, LAND, WALL, WALL],
    [WALL, WALL, LAND, LAND, LAND, WALL, WALL, LAND, WALL, WALL, WALL, LAND, WALL, WALL, WALL],
    [WALL, LAND, LAND, WALL, LAND, WALL, WALL, LAND, WALL, WALL, WALL, LAND, WALL, WALL, WALL],
    [WALL, WALL, LAND, WALL, LAND, LAND, LAND, LAND, LAND, WALL, WALL, LAND, LAND, LAND, WALL],
    [WALL, LAND, LAND, LAND, WALL, WALL, LAND, WALL, WALL, WALL, DOOR, WALL, WALL, LAND, WALL],
    [WALL, LAND, LAND, BALL, WALL, WALL, LAND, LAND, LAND, LAND, LAND, LAND, LAND, LAND, WALL],
    [WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL, WALL]
]

export {
    FPS,
    width_F,
    height_F,
    width_H,
    height_H,
    music_play,
    scenary,
    BALL,
    DOOR,
    LAND,
    WALL
}
