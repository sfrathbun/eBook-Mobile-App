import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chapter5pg12Page } from './chapter5pg12.page';

describe('Chapter5pg12Page', () => {
  let component: Chapter5pg12Page;
  let fixture: ComponentFixture<Chapter5pg12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chapter5pg12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chapter5pg12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
