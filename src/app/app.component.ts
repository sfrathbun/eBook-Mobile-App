import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'book'
    },
    {
      title: 'Contents',
      url: '/tableofcontents',
      icon: 'list'
    },
    {
      title: '1 John 1',
      url: '/chapter1',
      icon: 'bookmark'
    },
    {
      title: '1 John 2',
      url: '/chapter2',
      icon: 'bookmark'
    },
    {
      title: '1 John 3',
      url: '/chapter3',
      icon: 'bookmark'
    },
    {
      title: '1 John 4',
      url: '/chapter4',
      icon: 'bookmark'
    },
    {
      title: '1 John 5',
      url: '/chapter5',
      icon: 'bookmark'
    }
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
