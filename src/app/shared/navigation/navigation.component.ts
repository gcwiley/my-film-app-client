import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isDark: boolean | undefined;

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setTheme();
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    this.setTheme();
  }

  setTheme(): void {
    document.documentElement.classList.toggle('dark-theme', this.isDark);
    this.overlayContainer.getContainerElement().classList.toggle('dark-theme', this.isDark);
  }
}
