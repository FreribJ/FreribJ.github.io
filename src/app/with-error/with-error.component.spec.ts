import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithErrorComponent } from './with-error.component';

describe('WithErrorComponent', () => {
  let component: WithErrorComponent;
  let fixture: ComponentFixture<WithErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
