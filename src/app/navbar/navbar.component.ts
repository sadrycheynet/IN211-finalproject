import { Component, OnInit } from '@angular/core';
import { INavbarLangSet, AllowedLang } from '../constants';
import { LangService } from '../lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  translation:INavbarLangSet = null;  //data translation needed for the navbar
  language:AllowedLang = "en";        //language used (by default, English)

  constructor(private lang:LangService) { }

  ngOnInit(): void {
    this.language = this.lang.language;
    this.changeLang(this.language);
  }

  changeLang(language:AllowedLang){
    this.language=language;
    this.lang.changeLang(language);
    this.translation=this.lang.translation.navbar;
  }

}
