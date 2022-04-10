import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadScriptsService {

  constructor() { }

  /**
   * Loads specific scripts of the game into the DOM.
   * @param files The files of the games to load.
   */
  load_game = (files: string[]) => {
    files.forEach(file => {
      const script = document.createElement('script');
      script.src = `./assets/Games/${file}.js`;
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  load_game_modules = (file: string, type:string, defer:boolean) => {
    const script = document.createElement('script');
    script.src = `./assets/Games/${file}.js`;
    script.type = type;
    defer ? script.defer = true : script.defer = false;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  /**
   * Loads specific scripts inside of 'assets' into the DOM.
   * @param files The files of the games to load.
   */
  load_assets_script = (files: string[]) => {
    files.forEach(file => {
      const script = document.createElement('script');
      script.src = `./assets/${file}.js`;
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  /**
   * Loads specific scripts from the internet into the DOM.
   * @param urls The urls of the scripts to load.
   */
  load_url_script = (urls: string[]) => {
    urls.forEach(url => {
      const script = document.createElement('script');
      script.src = url;
      script.type = 'text/javascript';
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }
}
