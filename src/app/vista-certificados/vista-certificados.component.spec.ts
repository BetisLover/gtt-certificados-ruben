import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaCertificadosComponent } from './vista-certificados.component';

describe('VistaCertificadosComponent', () => {
  let component: VistaCertificadosComponent;
  let fixture: ComponentFixture<VistaCertificadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaCertificadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
