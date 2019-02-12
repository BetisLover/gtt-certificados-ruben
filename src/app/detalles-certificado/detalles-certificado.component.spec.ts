import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCertificadoComponent } from './detalles-certificado.component';

describe('DetallesCertificadoComponent', () => {
  let component: DetallesCertificadoComponent;
  let fixture: ComponentFixture<DetallesCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallesCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
