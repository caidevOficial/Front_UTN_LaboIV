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

  /**
   * Loads specific scripts of the game into the DOM.
   * @param file The file of the game module to load.
   * @param type The type of the game module to load.
   * @param defer Whether the script should be deferred or not.
   */
  load_game_modules = (file: string, type:string, defer:boolean) => {
    const script = document.createElement('script');
    script.src = `./assets/Games/${file}.js`;
    script.type = type;
    defer ? script.defer = true : script.defer = false;
    document.getElementsByTagName('head')[0].appendChild(script);
  }

  /**
   * Loads specific scripts inside of 'assets' into the DOM.
   * @param files The scripts path inside of 'assets' to load.
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
   * Loads specific scripts inside of the directory passed by the path into the DOM.
   * @param files The scripts path to load.
   */
   load_script_fullpath = (files: string[]) => {
    files.forEach(file => {
      const script = document.createElement('script');
      script.src = `${file}.js`;
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

  /**
   * Loads specific styles from the internet into the DOM.
   * @param urls The urls of the styles to load.
   */
   load_url_styles = (urls: string[]) => {
    urls.forEach(url => {
      const link_style = document.createElement('link');
      link_style.rel = 'stylesheet';
      link_style.href = url;
      link_style.type = 'text/css';
      document.getElementsByTagName('head')[0].appendChild(link_style);
    });
  }
}
