import { Component, OnInit } from '@angular/core';
import { Teams } from './interfaces/Team';
import { NbThemeService } from '@nebular/theme';
import { Themes } from './models/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  theme = true;
  teams: Teams[] = [
    {value: 'team1', viewValue: 'Team-1'},
    {value: 'team2', viewValue: 'Team-2'}
  ];
  constructor(private themeService: NbThemeService) { }
  ngOnInit() {
    const theme = localStorage.getItem('theme');
    theme === 'team1' || theme === null  ? this.DefaultTheme() : this.DarkTheme();
  }
  changeTheme(value: string) {
    value === 'team1' ? this.DefaultTheme() : this.DarkTheme();
    localStorage.setItem('theme', this.theme ? 'team1' : 'team2');
  }
  DefaultTheme() {
    this.theme = true;
    document.body.classList.add(Themes.Default);
    document.body.classList.remove(Themes.Dark);
    this.themeService.changeTheme(Themes.Default);
  }
  DarkTheme() {
    this.theme = false;
    document.body.classList.add(Themes.Dark);
    document.body.classList.remove(Themes.Default);
    this.themeService.changeTheme(Themes.Dark);
  }
}
