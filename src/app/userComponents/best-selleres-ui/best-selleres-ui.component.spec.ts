import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSelleresUiComponent } from './best-selleres-ui.component';

describe('BestSelleresUiComponent', () => {
  let component: BestSelleresUiComponent;
  let fixture: ComponentFixture<BestSelleresUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestSelleresUiComponent]
    });
    fixture = TestBed.createComponent(BestSelleresUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
