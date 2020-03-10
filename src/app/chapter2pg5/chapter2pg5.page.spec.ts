import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter2pg5Page } from './chapter2pg5.page';

describe('Chapter2pg5Page', () => {
  let component: Chapter2pg5Page;
  let fixture: ComponentFixture<Chapter2pg5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter2pg5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter2pg5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
