import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModTwoComponent } from './mod-two.component';

describe('ModTwoComponent', () => {
  let component: ModTwoComponent;
  let fixture: ComponentFixture<ModTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
