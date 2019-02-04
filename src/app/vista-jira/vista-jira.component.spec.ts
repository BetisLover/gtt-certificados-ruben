import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaJiraComponent } from './vista-jira.component';

describe('VistaJiraComponent', () => {
  let component: VistaJiraComponent;
  let fixture: ComponentFixture<VistaJiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaJiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaJiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
