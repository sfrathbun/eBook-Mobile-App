import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter1pg2Page } from './chapter1pg2.page';

describe('Chapter1pg2Page', () => {
  let component: Chapter1pg2Page;
  let fixture: ComponentFixture<Chapter1pg2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter1pg2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter1pg2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
