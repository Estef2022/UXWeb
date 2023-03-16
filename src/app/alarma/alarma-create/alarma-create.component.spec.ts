import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmaCreateComponent } from './alarma-create.component';

describe('AlarmaCreateComponent', () => {
  let component: AlarmaCreateComponent;
  let fixture: ComponentFixture<AlarmaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmaCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
