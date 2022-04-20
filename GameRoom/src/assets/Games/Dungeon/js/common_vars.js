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
const DOOR = 1;
const LAND = 2;
const BALL = 3;
const UP_DIR = 0;
const DOWN_DIR = 1;
const LEFT_DIR = 2;
const RIGHT_DIR = 3;
const _hero_defeat_sound = [
    'defeat_01',
    'defeat_02'
];

const _hero_basic_sound = [
    'dball_found',
    'error',
    'victory',
    'enemy_rage',
    'game_init_01',
    'game_init_02',
    'scream_transform'
];

const _hero_phrasings = [
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
    'with_me',
    'stop_game'
];

const _enemy_init_phrase = [
    'init_frieza'
];

const _enemy_provoke = [
    'provoke_01',
    'provoke_02',
    'provoke_03',
    'provoke_04',
    'provoke_05',
    'provoke_06',
    'provoke_07',
    'provoke_08',
    'provoke_09',
    'provoke_10',
    'provoke_11',
    'provoke_12',
    'provoke_13'
];

const _enemy_defeat_hero_phrasing = [
    'provoke_death_01',
    'provoke_death_02',
    'provoke_death_03',
    'provoke_death_04',
    'provoke_death_05'
];

const _enemy_rage = [
    'rage_01',
    'rage_02'
];

const music_themes = [
    "battle_theme",
    "vegeta_theme"
];

const _BASIC_MSG_FORMAT = 'color: #FFF; background-color: black; font-size: 10px; border: 2px solid red; border-radius: 10px; pading: 5px 10px;';
const _HERO_MSG_FORMAT = 'color: #FFF; background-color: blue; font-size: 10px; border: 2px solid white; border-radius: 10px; pading: 5px 10px;';
const _SUPER_HERO_MSG_FORMAT = 'color: black; background-color: yellow; font-size: 10px; border: 2px solid blue; border-radius: 10px; pading: 5px 10px;';
const _VILLAIN_MSG_FORMAT = 'color: #FFF; background-color: purple; font-size: 10px; border: 2px solid white; border-radius: 10px; pading: 5px 10px;';

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
 * Plays a specific sound of the player.
 * @param {string} phrase The name of the audio to be played.
 */
 const speak = (phrase) => {
    let do_speak = new Howl({
        src: [`../assets/Games/Dungeon/sound/${phrase}.ogg`],
        loop: false
    });
    do_speak.play();
}

const sleep = (milliseconds) => {
    let start = new Date().getTime();
    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
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
    UP_DIR,
    DOWN_DIR,
    LEFT_DIR,
    RIGHT_DIR,
    music_play,
    speak,
    sleep,
    scenary,
    BALL,
    DOOR,
    LAND,
    WALL,
    _hero_basic_sound,
    _hero_defeat_sound,
    _hero_phrasings,
    _enemy_init_phrase,
    _enemy_provoke,
    _enemy_defeat_hero_phrasing,
    _enemy_rage,
    _BASIC_MSG_FORMAT,
    _HERO_MSG_FORMAT,
    _SUPER_HERO_MSG_FORMAT,
    _VILLAIN_MSG_FORMAT
}
