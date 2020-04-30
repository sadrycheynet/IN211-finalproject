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
    // we subscribe here to the changes in the service
    // you'll do this for all the components that listen for the language stream
    this.lang.language$.subscribe(language => {
      this.language =  language
      this.translation=this.lang.translation.navbar;
    })
    
  }

}
