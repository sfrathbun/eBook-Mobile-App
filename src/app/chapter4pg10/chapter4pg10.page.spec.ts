import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter4pg10Page } from './chapter4pg10.page';

describe('Chapter4pg10Page', () => {
  let component: Chapter4pg10Page;
  let fixture: ComponentFixture<Chapter4pg10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter4pg10Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter4pg10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
