import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadedbookComponent } from './readedbook.component';

describe('ReadedbookComponent', () => {
  let component: ReadedbookComponent;
  let fixture: ComponentFixture<ReadedbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadedbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadedbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
