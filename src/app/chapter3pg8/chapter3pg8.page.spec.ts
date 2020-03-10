import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter3pg8Page } from './chapter3pg8.page';

describe('Chapter3pg8Page', () => {
  let component: Chapter3pg8Page;
  let fixture: ComponentFixture<Chapter3pg8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter3pg8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter3pg8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
