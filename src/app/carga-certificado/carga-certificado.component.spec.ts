import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaCertificadoComponent } from './carga-certificado.component';

describe('CargaCertificadoComponent', () => {
  let component: CargaCertificadoComponent;
  let fixture: ComponentFixture<CargaCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
