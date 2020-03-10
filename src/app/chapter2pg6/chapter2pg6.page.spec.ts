import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter2pg6Page } from './chapter2pg6.page';

describe('Chapter2pg6Page', () => {
  let component: Chapter2pg6Page;
  let fixture: ComponentFixture<Chapter2pg6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2pg6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter2pg6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
