import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasillosComponent } from './pasillos.component';

describe('PasillosComponent', () => {
  let component: PasillosComponent;
  let fixture: ComponentFixture<PasillosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasillosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
