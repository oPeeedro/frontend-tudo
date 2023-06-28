import { Component, OnInit } from '@angular/core';
import { I18nService } from '../services/translations/i18n.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentLanguage: string = 'pt'; // idioma padrão

  constructor(public i18nService: I18nService) { }

  ngOnInit(): void { }

  // INTERNACIONALIZACAO
  changeLanguage(language: string, event: Event): void {
    event.preventDefault();
    this.i18nService.setCurrentLanguage(language);
  }

  getTranslation(key: string): string {
    return this.i18nService.getTranslation(key);
  }

}
