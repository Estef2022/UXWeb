import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmaListaComponent } from './alarma-lista.component';

describe('AlarmaListaComponent', () => {
  let component: AlarmaListaComponent;
  let fixture: ComponentFixture<AlarmaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlarmaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
