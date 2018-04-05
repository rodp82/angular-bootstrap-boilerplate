import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModOneComponent } from './mod-one.component';

describe('ModOneComponent', () => {
  let component: ModOneComponent;
  let fixture: ComponentFixture<ModOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
