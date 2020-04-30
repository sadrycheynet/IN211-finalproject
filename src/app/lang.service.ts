import { Injectable } from '@angular/core';
import { AllowedLang, ILangSet, LANGS } from './constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  language:AllowedLang="en"
  language$:BehaviorSubject<AllowedLang> = new BehaviorSubject<AllowedLang>(this.language);
  // language$ is an observable.. when you want to trigger an update in your components you call language$.next(new val here)
  private _langs:ILangSet;

  get translation():ILangSet{
    return this._langs;
  }

  changeLang(language:AllowedLang){
    this.language=language;
    this.language$.next(language); // we emit a new value in the stream
    localStorage.setItem('language',language);
    this._langs=LANGS[this.language];

  }

  constructor() {
    this.language = localStorage.getItem('language') as AllowedLang || "en";
    this.changeLang(this.language);
  }

}
