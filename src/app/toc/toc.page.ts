import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Living Expression",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | Christ, our Answer for Sin",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | Divine Sonship",
      url: "/chapter3"
    },
    {
      title: "Chapter 4 | God Is Love",
      url: "/chapter4"
    },
    {
      title: "Chapter 5 | The Proof of Love",
      url: "/chapter5"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
