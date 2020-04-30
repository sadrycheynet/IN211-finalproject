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

  constructor(private lang:LangService) { }

  ngOnInit(): void {
    // we subscribe here to the changes in the lang service
    // you'll do this for all the components that listen for the translation stream
    this.lang.translation$.subscribe(translation => {
      this.translation=translation.navbar
    })
    
  }

}
