import { Component, OnInit } from '@angular/core';
import { LangService } from '../lang.service';
import { AllowedLang } from '../constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  language:AllowedLang = "en";        //language used (by default, English)

  constructor(private lang:LangService) { }

  ngOnInit(): void {
    this.language = this.lang.language;
    this.changeLang(this.language);
  }

  changeLang(language:AllowedLang){
    this.language=language;
    this.lang.changeLang(language);
  }

}
