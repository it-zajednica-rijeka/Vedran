import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

  public static color: string = "blue";
  public static colors: Array<string> = ["yellow", "black", "red", "blue", "green", "magenta"];

  public static randomColor(color: string = null): IColor {

    let newcolor: string = null;
    do {
      newcolor = this.colors[Math.floor(Math.random() * this.colors.length)];
    } while (color == newcolor)

    return { code: newcolor, text: 'colors.' + newcolor } as IColor;

  };

}

