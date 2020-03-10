import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter1pg3Page } from './chapter1pg3.page';

describe('Chapter1pg3Page', () => {
  let component: Chapter1pg3Page;
  let fixture: ComponentFixture<Chapter1pg3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter1pg3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter1pg3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
