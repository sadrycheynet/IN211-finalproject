import { Injectable } from '@angular/core';
import { AllowedLang, ILangSet, LANGS } from './constants';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language:AllowedLang="en"
  private _langs:ILangSet;

  get translation():ILangSet{
    return this._langs;
  }

  changeLang(language:AllowedLang){
    this.language=language;
    localStorage.setItem('language',language);
    this._langs=LANGS[this.language];

  }

  constructor() {
    this.language = localStorage.getItem('language') as AllowedLang || "en";
    this.changeLang(this.language);
  }

}
